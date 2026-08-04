#!/bin/sh
# Command-line calculator over the TypeScript module

if [ $# -ne 3 ]; then
    echo "usage: calc.sh <op> <a> <b>" >&2
    exit 1
fi

op="$1"
a="$2"
b="$3"

# Validate operation
case "$op" in
    add|subtract|multiply|divide|power)
        ;;
    *)
        echo "usage: calc.sh <op> <a> <b>" >&2
        exit 1
        ;;
esac

# Delegate to bun with the calculator module
bun -e "import { $op } from './src/calculator'; console.log($op($a, $b))"
