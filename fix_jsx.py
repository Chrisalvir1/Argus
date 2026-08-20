with open("src/features/dashboard/components/SecurityConsole.tsx", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.strip() == "</div>":
        # Check if the next line is "  );"
        idx = lines.index(line)
        if idx + 2 < len(lines) and "</div>" in lines[idx+1] and ");" in lines[idx+2]:
            new_lines.append(line)
            new_lines.append(lines[idx+1])
            new_lines.append("    </>\n")
            new_lines.append(lines[idx+2])
            new_lines.append(lines[idx+3])
            break
    new_lines.append(line)

with open("src/features/dashboard/components/SecurityConsole.tsx", "w") as f:
    f.writelines(new_lines)
