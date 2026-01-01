/* ------------------------------------------------------------
   1. Type Narrowing using typeof
------------------------------------------------------------ */

function getChai(kind: string | number): string {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order number: ${kind}`;
}

/* ------------------------------------------------------------
   2. Optional Parameters
------------------------------------------------------------ */

function serveChai(message?: string): string {
    if (message) {
        return `Serving ${message}`;
    }
    return "Serving default Masala Chai";
}

/* ------------------------------------------------------------
   3. Literal Union Types with Narrowing
------------------------------------------------------------ */

function orderChai(
    size: "small" | "medium" | "large" | number
): string {
    if (size === "small") {
        return "Preparing small cutting chai";
    }

    if (size === "medium" || size === "large") {
        return "Preparing extra chai";
    }

    return `Chai order ID: ${size}`;
}

/* ------------------------------------------------------------
   4. Class-Based Type Narrowing using instanceof
------------------------------------------------------------ */

class SpecialTea {
    serve(): string {
        return "Serving special chai";
    }
}

class NormalTea {
    serve(): string {
        return "Serving normal chai";
    }
}

function serveTea(tea: SpecialTea | NormalTea): string {
    if (tea instanceof SpecialTea) {
        return tea.serve();
    }
    return tea.serve();
}

/* ------------------------------------------------------------
   5. Custom Type Guard using unknown
------------------------------------------------------------ */

type ChaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(value: unknown): value is ChaiOrder {
    return (
        typeof value === "object" &&
        value !== null &&
        "type" in value &&
        "sugar" in value &&
        typeof (value as any).type === "string" &&
        typeof (value as any).sugar === "number"
    );
}

function serveOrder(item: ChaiOrder | string): string {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}

/* ------------------------------------------------------------
   6. Discriminated Union Types
------------------------------------------------------------ */

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
};

type GingerChai = {
    type: "ginger";
    amount: number;
};

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai): string {
    switch (order.type) {
        case "masala":
            return `Masala chai with spice level ${order.spiceLevel}`;
        case "ginger":
            return `Ginger chai with amount ${order.amount}`;
        case "elaichi":
            return `Elaichi chai with aroma ${order.aroma}`;
        default:
            const exhaustiveCheck: never = order;
            return exhaustiveCheck;
    }
}

/* ------------------------------------------------------------
   7. Property-Based Narrowing using "in"
------------------------------------------------------------ */

function brewChai(order: MasalaChai | GingerChai): string {
    if ("spiceLevel" in order) {
        return "Brewing masala chai";
    }
    return "Brewing ginger chai";
}

/* ------------------------------------------------------------
   8. Array Type Guard using unknown
------------------------------------------------------------ */

function isStringArray(value: unknown): value is string[] {
    return (
        Array.isArray(value) &&
        value.every(item => typeof item === "string")
    );
}

/* ============================================================
   CONSOLE CHECKING (Runtime Validation)
   ============================================================ */

console.log(getChai("Masala"));
console.log(getChai(101));

console.log(serveChai());
console.log(serveChai("Ginger Chai"));

console.log(orderChai("small"));
console.log(orderChai("large"));
console.log(orderChai(555));

const special = new SpecialTea();
const normal = new NormalTea();

console.log(serveTea(special));
console.log(serveTea(normal));

console.log(
    serveOrder({ type: "Masala", sugar: 2 })
);
console.log(
    serveOrder("Custom strong chai")
);

console.log(
    makeChai({ type: "masala", spiceLevel: 3 })
);
console.log(
    makeChai({ type: "ginger", amount: 2 })
);
console.log(
    makeChai({ type: "elaichi", aroma: 5 })
);

console.log(
    brewChai({ type: "masala", spiceLevel: 4 })
);
console.log(
    brewChai({ type: "ginger", amount: 1 })
);

console.log(isStringArray(["chai", "tea"]));
console.log(isStringArray([1, "chai"]));
console.log(isStringArray("chai"));          
