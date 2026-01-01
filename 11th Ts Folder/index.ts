// ======================================================
// 1️⃣ BASIC INTERFACE (OBJECT SHAPE)
// ======================================================
// Real life: A chai item structure used across app

interface Chai {
  flavor: string;
  price: number;
  milk?: boolean; // optional property
}

const masala: Chai = {
  flavor: "Masala",
  price: 22
  // milk is optional
};



// ======================================================
// 2️⃣ READONLY PROPERTIES
// ======================================================
// Real life: Database ID (must never change)

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Brainzima"
};

// s.id = 2 ❌ ERROR (readonly protects data)



// ======================================================
// 3️⃣ FUNCTION TYPE INTERFACE
// ======================================================
// Real life: Discount calculator logic

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (price) => price * 0.5;

apply50(200); // returns 100



// ======================================================
// 4️⃣ METHOD-BASED INTERFACE
// ======================================================
// Real life: Any tea machine must follow this contract

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Machine started");
  },
  stop() {
    console.log("Machine stopped");
  }
};

machine.start();
machine.stop();



// ======================================================
// 5️⃣ INDEX SIGNATURE
// ======================================================
// Real life: Ratings map (dynamic keys)

interface ChaiRating {
  [flavor: string]: number;
}

const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 4.0,
  lemon: 3.8
};



// ======================================================
// 6️⃣ INTERFACE MERGING (AUTO MERGE)
// ======================================================
// Real life: Extend models across files/modules

interface User {
  name: string;
}

interface User {
  age: number;
}

// Both interfaces are merged automatically

const u1: User = {
  name: "NilamRajput",
  age: 17
};



// ======================================================
// 7️⃣ EXTENDING MULTIPLE INTERFACES
// ======================================================
// Real life: Combining multiple capabilities

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {
  // C now has both a and b
}

const obj: C = {
  a: "Hello",
  b: "World"
};



// ======================================================
// SUMMARY — WHEN TO USE INTERFACES
// ======================================================

/*
USE INTERFACE WHEN:
✔ Defining object shapes
✔ Defining function contracts
✔ Designing APIs
✔ Implementing classes
✔ Expecting extension / merging

INTERFACE VS TYPE:
- interface → extendable, mergeable (preferred for objects)
- type      → unions, advanced compositions

BEST PRACTICE:
- Use interface for models & contracts
- Use type for unions & utilities
*/
