/* ------------------------------------------------------------
   Example: Type Assertions vs Type Safety
------------------------------------------------------------ */

/* Prefer `unknown` over `any` */
let response: unknown = "42";

/* Proper type narrowing */
let numericLength: number;

if (typeof response === "string") {
    numericLength = response.length;
} else {
    numericLength = 0;
}

console.log("String length:", numericLength);

/* ------------------------------------------------------------
   Safe JSON Parsing with Runtime Validation
------------------------------------------------------------ */

type Book = {
    name: string;
};

/* Valid JSON (double quotes only) */
const bookString = '{"name":"M Laxmikant"}';

/* JSON.parse returns `any` internally */
const parsedValue: unknown = JSON.parse(bookString);

/* Custom type guard */
function isBook(value: unknown): value is Book {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value &&
        typeof (value as any).name === "string"
    );
}

if (isBook(parsedValue)) {
    console.log("Book object:", parsedValue);
} else {
    console.error("Invalid book data");
}

/* ------------------------------------------------------------
   DOM Type Assertion (Safe Pattern)
------------------------------------------------------------ */

const inputElement = document.getElementById("userName");

if (inputElement instanceof HTMLInputElement) {
    console.log("Input value:", inputElement.value);
}

/* ------------------------------------------------------------
   any vs unknown (Comparison)
------------------------------------------------------------ */

/* ❌ any disables type safety */
let value: any;
value = "Chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // No compiler protection

/* ✅ unknown forces checks */
let newValue: unknown;
newValue = "Chai";
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === "string") {
    newValue.toUpperCase();
}

/* ------------------------------------------------------------
   Error Handling with Proper Narrowing
------------------------------------------------------------ */

try {
    throw new Error("Something went wrong");
} catch (error) {
    if (error instanceof Error) {
        console.log("Error message:", error.message);
    } else {
        console.log("Unknown error:", error);
    }
}

/* ------------------------------------------------------------
   Type Assertion (Last Resort)
------------------------------------------------------------ */

const data: unknown = "Brainzima Innovation";

/* Only safe because we know the source */
const strData: string = data as string;
console.log(strData.toUpperCase());

/* ------------------------------------------------------------
   never Type & Exhaustiveness
------------------------------------------------------------ */

type Role = "Admin" | "User" | "SuperAdmin";

function redirectBasedOnRole(role: Role): void {
    switch (role) {
        case "Admin":
            console.log("Redirect to Admin Dashboard");
            break;

        case "User":
            console.log("Redirect to User Dashboard");
            break;

        case "SuperAdmin":
            console.log("Redirect to Super Admin Dashboard");
            break;

        default:
            const exhaustiveCheck: never = role;
            return exhaustiveCheck;
    }
}

/* Function that never returns */
function neverReturn(): never {
    while (true) {
        // infinite loop
    }
}
