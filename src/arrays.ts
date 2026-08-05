export function chunk<T>(values: T[], size: number): T[][] {
  if (!Number.isInteger(size) || size < 1) {
    throw new Error("chunk size must be a positive integer");
  }
  const chunks: T[][] = [];
  for (let index = 0; index + size <= values.length; index += size) {
    chunks.push(values.slice(index, index + size));
  }
  return chunks;
}

export function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}
