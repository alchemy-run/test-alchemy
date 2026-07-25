#!/bin/sh
find docs -name '*.md' -type f | xargs cat | tr ' ' '\n' | tr '[:upper:]' '[:lower:]' | grep -v '^$' | sort | uniq -c | sort -rn | head -10
