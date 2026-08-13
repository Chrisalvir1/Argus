import re

file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

# Make the user profiles bigger and responsive
# Previously: width:140px; height:180px; maybe? Let's check what it uses.
# We want it to be responsive.
# We will use flex-wrap and larger sizes.
grid_html_match = re.search(r'const gridHtml = `\n\s*<div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap; max-width:800px; margin-top:40px;">(.*?)</div>\n\s*`;', text, re.DOTALL)
if grid_html_match:
    print("Found grid_html!")

