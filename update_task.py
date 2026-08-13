import re

with open("/Users/chrisalvir/.gemini/antigravity/brain/f5efb2ab-a61e-4a9e-8463-91f5d098e824/task.md", "r") as f:
    text = f.read()

text = text.replace("- [ ]", "- [x]")

with open("/Users/chrisalvir/.gemini/antigravity/brain/f5efb2ab-a61e-4a9e-8463-91f5d098e824/task.md", "w") as f:
    f.write(text)

print("Task updated")
