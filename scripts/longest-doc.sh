#!/bin/sh
wc -l docs/*.md | sort -n | tail -2 | head -1 | awk '{print $2}'
