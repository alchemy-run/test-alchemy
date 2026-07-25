#!/bin/sh

for file in docs/*.md; do
  heading=$(head -n 1 "$file" | sed 's/^# //')
  echo "$(basename "$file"): $heading"
done
