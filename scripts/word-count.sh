#!/bin/sh
find docs -name '*.md' | xargs wc -w | tail -1 | awk '{print $1}'
