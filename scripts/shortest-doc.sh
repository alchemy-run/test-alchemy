#!/bin/sh
wc -l docs/*.md | sort -n | head -2 | tail -1 | awk '{print $2}'
