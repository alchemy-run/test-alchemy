#!/bin/sh
find docs -name '*.md' -exec grep -c '^$' {} + | awk -F: '{sum+=$NF} END {print sum}'
