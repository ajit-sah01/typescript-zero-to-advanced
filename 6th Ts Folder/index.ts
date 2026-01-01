/* ------------------------------------------------------------
   Types, Interfaces, Classes, and Unions – Best Practices
------------------------------------------------------------ */

/* ------------------------------------------------------------
   1. Basic Object Type
------------------------------------------------------------ */

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder): void {
    console.log(order);
}

function serveChai(order: ChaiOrder): void {
    console.log(order);
}

/* ------------------------------------------------------------
   2. Interface Implementation by Class
------------------------------------------------------------ */

interface TeaRecipe {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

/* ------------------------------------------------------------
   3. Interface with Literal Union
------------------------------------------------------------ */

interface CupSize {
    size: "small" | "large";
}

class ChaiCup implements CupSize {
    size: "small" | "large" = "small";
}

/* ------------------------------------------------------------
   4. Union Types vs Classes (IMPORTANT RULE)
------------------------------------------------------------ */

type Response =
    | { ok: true }
    | { ok: false };

/*
❌ Classes CANNOT implement union types
The following is INVALID and removed:

class MyRes implements Response {}
*/

/* Correct approach */
class MyResponse {
    ok: boolean = true;
}

/* ------------------------------------------------------------
   5. Literal Union Function Parameter
------------------------------------------------------------ */

type TeaType = "Masala" | "Ginger" | "Lemon";

function orderTea(tea: TeaType): void {
    console.log(tea);
}

/* ------------------------------------------------------------
   6. Intersection Types
------------------------------------------------------------ */

type BaseChai = {
    teaLeaves: number;
};

type ExtraIngredients = {
    masala: number;
};

type MasalaChaiRecipe = BaseChai & ExtraIngredients;

const cup: MasalaChaiRecipe = {
    teaLeaves: 2,
    masala: 1,
};

/* ------------------------------------------------------------
   7. Optional Properties
------------------------------------------------------------ */

type User = {
    username: string;
    bio?: string;
};

const user1: User = {
    username: "Nilam Rajput",
};

const user2: User = {
    username: "Nilam Rajput",
    bio: "nilam.com",
};

/* ------------------------------------------------------------
   8. Readonly Properties
------------------------------------------------------------ */

type Config = {
    readonly appName: string;
    version: number;
};

const config: Config = {
    appName: "Brainzima",
    version: 1,
};

/*
❌ Not allowed (compile-time error)
config.appName = "New Name";
*/
