// ======================================================
// 1️⃣ GENERIC FUNCTION (REUSABLE & TYPE-SAFE)
// ======================================================
// Real life: Wrap any item into an array (utility helper)

function wrapInArrays<T>(item: T): T[] {
  return [item];
}

// TypeScript automatically infers T
wrapInArrays("Masala");          // T = string → string[]
wrapInArrays(23);                // T = number → number[]
wrapInArrays({ flavor: "Ginger" }); // T = { flavor: string }



// ======================================================
// 2️⃣ MULTIPLE GENERICS
// ======================================================
// Real life: Pairing two related values (key-value, label-price)

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("Masala", 20);                    // [string, number]
pair("Masala", { flavor: "Ginger" });  // [string, object]
pair("Masala", "Chai");                // [string, string]



// ======================================================
// 3️⃣ GENERIC INTERFACE
// ======================================================
// Real life: Reusable container (box, wrapper, response)

interface Box<T> {
  content: T;
}

// Same interface, different data types
const numberBox: Box<number> = {
  content: 10
};

const stringBox: Box<string> = {
  content: "Small"
};



// ======================================================
// 4️⃣ GENERICS WITH API RESPONSE
// ======================================================
// Real life: API responses return different data shapes

interface ApiPromise<T> {
  status: number;
  data: T;
}

// API response with typed data
const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "Masala Chai"
  }
};



// ======================================================
// 5️⃣ GENERIC WITH TYPE CONSTRAINTS
// ======================================================
// Real life: Only objects with 'name' property allowed

function printName<T extends { name: string }>(item: T): void {
  console.log(item.name);
}

printName({ name: "Masala Chai", price: 20 });
// printName({ price: 20 }); ❌ ERROR



// ======================================================
// 6️⃣ DEFAULT GENERIC TYPE
// ======================================================
// Real life: Default API response shape

interface ApiResponse<T = string> {
  data: T;
  success: boolean;
}

const textResponse: ApiResponse = {
  data: "OK",
  success: true
};

const objectResponse: ApiResponse<{ id: number }> = {
  data: { id: 1 },
  success: true
};



// ======================================================
// 7️⃣ GENERICS + ARRAYS
// ======================================================
// Real life: Fetch list of items from server

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

getFirst(["Masala", "Ginger"]);
getFirst([10, 20, 30]);



// ======================================================
// SUMMARY — HOW TO THINK ABOUT GENERICS
// ======================================================

/*
GENERICS MEAN:
✔ One function / interface
✔ Works with many data types
✔ Keeps full type safety

WHEN TO USE:
✔ Utilities
✔ API responses
✔ Data containers
✔ Reusable logic

AVOID:
❌ any
❌ Over-complex generics without need

MENTAL MODEL:
Generic = "type comes from usage, not hard-coded"
*/
