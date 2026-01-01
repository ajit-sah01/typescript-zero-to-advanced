function Greet(name: string): string {
  return `Hello ${name}`;
}

console.log(Greet("Nilam"));
console.log(Greet(22)); // ❌ TypeScript error
