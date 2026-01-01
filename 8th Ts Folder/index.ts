// ===============================
// 1️⃣ BASIC FUNCTION WITH TYPES
// ===============================
// Real-life: Tea stall making chai orders

function makeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala", 2);
makeChai("Ginger", 3);



// ===============================
// 2️⃣ FUNCTION WITH RETURN TYPE
// ===============================
// Real-life: Fixed price from menu

function getChaiPrice(): number {
    return 25;
}

console.log("Chai price:", getChaiPrice());



// ===============================
// 3️⃣ FUNCTION RETURNING STRING | NULL
// ===============================
// Real-life: Order validation (cancel if empty)

function makeOrder(order: string): string | null {
    if (!order) return null;
    return order;
}

const orderResult = makeOrder("Lemon Tea");
if (orderResult) {
    console.log("Order received:", orderResult);
} else {
    console.log("No order placed");
}



// ===============================
// 4️⃣ VOID FUNCTION (NO RETURN)
// ===============================
// Real-life: Just logging / notification

function logChai(): void {
    console.log("Chai is ready ☕");
}

logChai();



// ===============================
// 5️⃣ OPTIONAL PARAMETER (?)
// ===============================
// Real-life: Customer may or may not tell type

function orderChai(type?: string): void {
    if (type) {
        console.log(`Customer ordered ${type} chai`);
    } else {
        console.log("Customer did not specify chai type");
    }
}

orderChai("Masala");
orderChai();



// ===============================
// 6️⃣ DEFAULT PARAMETER
// ===============================
// Real-life: Default chai if customer is silent

function orderChai2(type: string = "Masala"): void {
    console.log(`Preparing ${type} chai`);
}

orderChai2();
orderChai2("Ginger");



// ===============================
// 7️⃣ FUNCTION WITH OBJECT PARAMETER
// ===============================
// Real-life: POS system / Billing counter

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number {
    console.log("Order details:", order);

    // simple pricing logic
    let price = order.size === "large" ? 30 : 20;
    return price;
}

const billAmount = createChai({
    type: "Masala",
    sugar: 2,
    size: "large"
});

console.log("Total bill:", billAmount);



// ===============================
// 8️⃣ TYPE ALIAS FOR CLEAN CODE
// ===============================
// Real-life: Reusable order model

type ChaiOrder = {
    type: string;
    sugar: number;
    size: "small" | "large";
};

function createChai2(order: ChaiOrder): number {
    return order.size === "large" ? 30 : 20;
}

createChai2({
    type: "Lemon",
    sugar: 1,
    size: "small"
});



// ===============================
// 9️⃣ FUNCTION USING PARTIAL<T>
// ===============================
// Real-life: Update order (change sugar / size)

function updateOrder(order: Partial<ChaiOrder>): void {
    console.log("Updating order:", order);
}

updateOrder({ sugar: 3 });
updateOrder({ size: "large" });
updateOrder({});



// ===============================
// 🔟 FUNCTION USING REQUIRED<T>
// ===============================
// Real-life: Final checkout (everything must exist)

function checkout(order: Required<ChaiOrder>): void {
    console.log("Final order confirmed:", order);
}

checkout({
    type: "Masala",
    sugar: 2,
    size: "large"
});



// ===============================
// 1️⃣1️⃣ READONLY FUNCTION PARAM
// ===============================
// Real-life: Bill print (cannot change data)

function printBill(order: Readonly<ChaiOrder>): void {
    console.log("Printing bill:", order);
    // order.size = "small"; ❌ not allowed
}

printBill({
    type: "Ginger",
    sugar: 1,
    size: "small"
});
