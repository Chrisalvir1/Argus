with open("src/legacy/argus-panel.ts", "r") as f:
    lines = f.readlines()

in_style = False
stack = []
for i, line in enumerate(lines):
    if "<style>" in line: in_style = True
    if "</style>" in line: in_style = False
    
    if in_style:
        for j, char in enumerate(line):
            if char == '{':
                stack.append(i + 1)
            elif char == '}':
                if stack:
                    stack.pop()
                else:
                    print(f"Extra closing brace at line {i+1}")

print("Unclosed opening braces at lines:", stack)
