import re

with open("custom_components/argus/www/argus-panel.js", "r") as f:
    js = f.read()

# 1. Update CSS
css_masonry = """
  .masonry-grid { column-count: 3; column-gap: 24px; width: 100%; }
  .masonry-grid > section { break-inside: avoid; margin-bottom: 24px; display: inline-block; width: 100%; }
  @media(max-width:1100px){ .masonry-grid { column-count: 2; } }
  @media(max-width:750px){ .masonry-grid { column-count: 1; } }
  
  .panoramic-instances { margin-bottom: 24px; }
"""
js = js.replace(".grid{display:grid;grid-template-columns:1.2fr 0.9fr 0.9fr;gap:24px;align-items:start}", css_masonry)
js = js.replace("@media(max-width:1100px){.grid{grid-template-columns:1fr 1fr}}", "")
js = js.replace("@media(max-width:750px){.grid{grid-template-columns:1fr}.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}", "@media(max-width:750px){.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}")

# 2. Re-arrange HTML
# We can find `<div class="grid">` and process the stacks.
# Actually, the simplest way is to replace `<div class="grid">` and `<div class="stack">` and `</div>` endings.
html_start_idx = js.find('<!-- TWO-COLUMN LAYOUT -->')
html_end_idx = js.find('</template>')

original_html = js[html_start_idx:html_end_idx]
html = original_html

# Remove the `.grid` wrapper line
html = html.replace('<div class="grid">', '<div class="wrap-inner">')

# We'll isolate the "Instances" section which starts with <!-- Instances --> and ends with </section>
instances_match = re.search(r'<!-- Instances -->\s*<section class="glass panel liquid-glass">.*?</section>', html, re.DOTALL)
if instances_match:
    instances_html = instances_match.group(0)
    # Give it panoramic class
    instances_html = instances_html.replace('<section class="glass panel liquid-glass">', '<section class="glass panel liquid-glass panoramic-instances">')
    # Remove it from everywhere
    html = html.replace(instances_match.group(0), '')
    
    # Place it right after <div class="wrap-inner">
    html = html.replace('<div class="wrap-inner">', '<div class="panoramic-container">\n      ' + instances_html + '\n    </div>\n    <div class="masonry-grid">')

# Now remove ALL `<div class="stack">` and their corresponding closing `</div>`.
# Because things are indented, we can find them line by line or via regex.
# <div class="stack"> ... </div> wraps multiple sections.
html = re.sub(r'<!-- LEFT COLUMN: Activity & Instances -->\s*<div class="stack">', '', html)
html = re.sub(r'<!-- CENTER COLUMN: Mi Casa & Modes -->\s*<div class="stack">', '', html)
html = re.sub(r'<!-- RIGHT COLUMN: Tools & Settings -->\s*<div class="stack">', '', html)

# The trailing </div> of each stack needs to be removed.
# Right after Activity Log section ends:
html = html.replace('</section>\n    </div>\n\n    <!-- CENTER', '</section>\n\n    <!-- CENTER')
# Right after Modes section ends:
html = html.replace('</section>\n    </div>\n\n    <!-- RIGHT', '</section>\n\n    <!-- RIGHT')
# Right after Advanced section ends (which is the last one in the right column)
html = html.replace('</section>\n    </div>\n  </div>\n</div>', '</section>\n  </div>\n</div>\n</div>')

js = js[:html_start_idx] + html + js[html_end_idx:]

with open("custom_components/argus/www/argus-panel.js", "w") as f:
    f.write(js)
