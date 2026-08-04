#!/bin/sh
# Count total lines in all *.md files in the repository root

total=0
for file in ./*.md; do
    if [ -f "$file" ]; then
        lines=$(wc -l < "$file")
        total=$((total + lines))
    fi
done

echo "total: $total"
