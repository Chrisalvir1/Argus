import os, glob, re

VERSION = "2.0.54"

def rep(fpath, patt, repl):
    if not os.path.exists(fpath): return
    with open(fpath, "r") as f: txt = f.read()
    txt = re.sub(patt, repl, txt)
    with open(fpath, "w") as f: f.write(txt)

rep("custom_components/argus/manifest.json", r'"version":\s*"2\.0\.53"', f'"version": "{VERSION}"')
rep("custom_components/argus/const.py", r'VERSION = "v2\.0\.53"', f'VERSION = "v{VERSION}"')
rep("src/legacy/argus-panel.ts", r"2\.0\.53", VERSION)

for f in glob.glob("tests/test_*.py"):
    rep(f, r"2\.0\.53", VERSION)

rep("CHANGELOG.md", r"## \[2\.0\.53\]", f"## [{VERSION}]\n\n### Fixed\n- Fix watchdog freezing arming state indefinitely when custom sensor components translate closed states like 'cerrado' or 'off'.\n\n## [2.0.53]")

os.system(f"mv docs/RELEASE_NOTES_2.0.53.md docs/RELEASE_NOTES_{VERSION}.md")
rep(f"docs/RELEASE_NOTES_{VERSION}.md", r"2\.0\.53", VERSION)

print("Versions bumped")
