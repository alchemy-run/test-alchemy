#!/bin/sh
find docs -name '*.md' -exec wc -c {} + | awk '$2 != "total" {print $2, $1}'
