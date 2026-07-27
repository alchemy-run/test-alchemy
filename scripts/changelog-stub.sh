#!/bin/sh
if [ $# -eq 0 ]; then
  echo "usage: changelog-stub.sh <version>" >&2
  exit 1
fi
echo "## $1"
echo "- TBD"
