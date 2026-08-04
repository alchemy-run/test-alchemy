# Calculator

Simple arithmetic utility functions.

## `add`

Adds two numbers together.

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Return value:** (number) The sum of `a` and `b`

**Usage example:**
```typescript
import { add } from '../src/calculator';

const result = add(5, 3);
console.log(result); // Output: 8
```

## `subtract`

Subtracts the second number from the first number.

**Parameters:**
- `a` (number): The first number (minuend)
- `b` (number): The second number (subtrahend)

**Return value:** (number) The difference of `a` minus `b`

**Usage example:**
```typescript
import { subtract } from '../src/calculator';

const result = subtract(10, 4);
console.log(result); // Output: 6
```
