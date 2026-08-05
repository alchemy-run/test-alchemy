export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// TODO: remove before merge
export function debugGreet(name: string): string {
  console.log("greeting", name);
  return greet(name);
}
