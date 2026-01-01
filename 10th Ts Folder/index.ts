// ======================================================
// 1️⃣ BASIC CLASS + CONSTRUCTOR
// ======================================================
// Real life: A chai item in a menu

class Chai {
    flavor: string;
    price: number;

    constructor(flavor: string, price: number = 20) {
        this.flavor = flavor;
        this.price = price;
    }
}

const masalaChai = new Chai("Masala", 22);
masalaChai.flavor = "MASALA"; // allowed (public by default)



// ======================================================
// 2️⃣ ACCESS MODIFIERS
// ======================================================
// public    → accessible everywhere
// private   → accessible only inside class
// protected → accessible in child classes

class Chai2 {
    public flavor: string = "Masala";
    private secretIngredients: string = "Cardamom";

    revealSecret(): string {
        // private members can be accessed internally
        return this.secretIngredients;
    }
}

const c1 = new Chai2();
// c1.secretIngredients ❌ ERROR
c1.revealSecret(); // ✅ OK



// ======================================================
// 3️⃣ PROTECTED (INHERITANCE USE)
// ======================================================
// Real life: Chain shop with branches

class Shop {
    protected shopName = "Chai Corner";
}

class Branch extends Shop {
    getShopName(): string {
        return this.shopName; // allowed due to protected
    }
}

const branch = new Branch();
// branch.shopName ❌ ERROR



// ======================================================
// 4️⃣ PRIVATE CLASS FIELDS (#)
// ======================================================
// Real life: Wallet balance (true runtime privacy)

class Wallet {
    #balance = 100;

    getBalance(): number {
        return this.#balance;
    }
}

const w = new Wallet();
// w.#balance ❌ ERROR (JS-level protection)
w.getBalance(); // ✅ OK



// ======================================================
// 5️⃣ READONLY PROPERTIES
// ======================================================
// Real life: Cup capacity cannot change

class Cup {
    readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

const cup = new Cup(250);
// cup.capacity = 300 ❌ ERROR



// ======================================================
// 6️⃣ GETTERS & SETTERS (CONTROLLED ACCESS)
// ======================================================
// Real life: Sugar level validation

class ModernChai {
    private _sugar = 2;

    get sugar(): number {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) {
            throw new Error("Too sweet!");
        }
        this._sugar = value;
    }
}

const chai = new ModernChai();
chai.sugar = 3; // OK
// chai.sugar = 10 ❌ throws error



// ======================================================
// 7️⃣ STATIC MEMBERS
// ======================================================
// Real life: Shared shop info

class EkChai {
    static shopName = "Chaicode Cafe";

    constructor(public flavor: string) { }
}

console.log(EkChai.shopName); // accessed via class
const ek = new EkChai("Ginger");



// ======================================================
// 8️⃣ ABSTRACT CLASSES
// ======================================================
// Real life: Blueprint for all drinks

abstract class Drink {
    abstract make(): void;

    serve(): void {
        console.log("Serving drink...");
    }
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing chai...");
    }
}

const drink = new MyChai();
drink.make();
drink.serve();



// ======================================================
// 9️⃣ DEPENDENCY INJECTION (BEST PRACTICE)
// ======================================================
// Real life: ChaiMaker depends on Heater, not implementation

class Heater {
    heat(): void {
        console.log("Heating water...");
    }
}

class ChaiMaker {
    constructor(private heater: Heater) { }

    make(): void {
        this.heater.heat();
        console.log("Chai is ready!");
    }
}

const heater = new Heater();
const chaiMaker = new ChaiMaker(heater);
chaiMaker.make();



// ======================================================
// SUMMARY (HOW TO THINK IN OOP)
// ======================================================

/*
CLASS         → real-world entity
CONSTRUCTOR   → initialization
PUBLIC        → open access
PRIVATE       → internal logic
PROTECTED     → inheritance-only access
READONLY      → immutable state
GET/SET       → controlled modification
STATIC        → shared across all instances
ABSTRACT      → blueprint
DEPENDENCY    → loose coupling (scalable systems)
*/
