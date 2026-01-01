// ======================================
// 1️⃣ ARRAYS (HOMOGENEOUS DATA)
// ======================================
// Real life: chai shop menu lists

const chaiFlavors: string[] = ["Masala", "Ginger"];
const chaiPrices: number[] = [10, 20];

// Generic array syntax (same thing)
const ratings: Array<number> = [4.5, 5.0];



// ======================================
// 2️⃣ ARRAY OF OBJECTS
// ======================================
// Real life: menu database

type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "Masala", price: 10 },
    { name: "Ginger", price: 25 }
];



// ======================================
// 3️⃣ READONLY ARRAY (IMMUTABLE)
// ======================================
// Real life: fixed service locations

const cities: readonly string[] = ["Bihar", "Jharkhand"];

// cities.push("Maharashtra"); ❌ ERROR
// readonly arrays cannot be modified



// ======================================
// 4️⃣ MULTI-DIMENSIONAL ARRAY
// ======================================
// Real life: table / matrix / seating layout

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];



// ======================================
// 5️⃣ TUPLES (FIXED ORDER & LENGTH)
// ======================================
// Real life: name + price pair

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]; // ✅ correct
// chaiTuple = [20, "Masala"]; ❌ ERROR (order matters)



// ======================================
// 6️⃣ OPTIONAL ELEMENT IN TUPLE
// ======================================
// Real life: user profile (optional verified flag)

let userInfo: [string, number, boolean?];

userInfo = ["NilamRajput", 100];
userInfo = ["NilamRajput", 100, true];



// ======================================
// 7️⃣ READONLY TUPLE
// ======================================
// Real life: GPS coordinates (must never change)

const location: readonly [number, number] = [28.99, 90.0];

// location[0] = 30; ❌ ERROR



// ======================================
// 8️⃣ NAMED TUPLE (READABILITY)
// ======================================
// Real life: invoice item

const chaiItem: [name: string, price: number] = ["Masala", 20];



// ======================================
// ⚠️ IMPORTANT TUPLE WARNING
// ======================================

let tea: [string, number] = ["Chai", 10];

// ❗ This is allowed by JS runtime
tea.push("Extra Sugar");

// But now tuple safety is broken:
// tea = ["Chai", 10, "Extra Sugar"]

// 👉 Best practice: DO NOT push/pop on tuples



// ======================================
// 9️⃣ ENUMS (FIXED SET OF VALUES)
// ======================================
// Real life: cup size selection

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM;



// ======================================
// 🔟 NUMERIC ENUM WITH CUSTOM START
// ======================================
// Real life: order status codes

enum Status {
    PENDING = 100,
    SERVED,     // 101
    CANCELLED  // 102
}

const orderStatus = Status.SERVED;



// ======================================
// 1️⃣1️⃣ STRING ENUM (BEST PRACTICE)
// ======================================
// Real life: API-safe chai types

enum ChaiType {
    MASALA = "MASALA",
    GINGER = "GINGER",
    ADRAK = "ADRAK"
}

function makeChai(type: ChaiType): void {
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.MASALA);
// makeChai("MASALA"); ❌ not allowed



// ======================================
// 1️⃣2️⃣ HETEROGENEOUS ENUM (AVOID)
// ======================================
// Allowed, but NOT recommended

enum RandomEnum {
    ID = 1,
    NAME = "CHAI"
}



// ======================================
// 1️⃣3️⃣ CONST ENUM (COMPILED AWAY)
// ======================================
// Real life: performance-critical constants

const enum SugarLevel {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const sugar = SugarLevel.HIGH;

// 👉 const enum disappears in JS output (faster)



// ======================================
// SUMMARY (MENTAL MODEL)
// ======================================

/*
ARRAYS:
- Same data type
- Dynamic length
- Use for lists

TUPLES:
- Fixed order
- Fixed meaning per index
- Avoid push/pop

ENUMS:
- Fixed allowed values
- String enums are safest
- const enums for performance
*/
