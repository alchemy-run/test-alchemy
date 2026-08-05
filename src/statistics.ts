export function average(values: number[]): number {
  if (values.length === 0) {
    throw new Error("average of empty list");
  }
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum / values.length;
}

export function median(values: number[]): number {
  if (values.length === 0) {
    throw new Error("median of empty list");
  }
  const sorted = [...values].sort();
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) {
    return sorted[middle]!;
  }
  return (sorted[middle - 1]! + sorted[middle]!) / 2;
}
