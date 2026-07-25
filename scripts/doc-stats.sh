#!/bin/sh

files=$(find docs -name '*.md' -type f | wc -l | tr -d ' ')
lines=$(find docs -name '*.md' -type f -exec cat {} \; | wc -l | tr -d ' ')

echo "files: $files"
echo "lines: $lines"
