// ===============================
// BASIC OBJECT (TYPE INFERENCE)
// ===============================

const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};

// inferred type:
// { name: string; price: number; isHot: boolean }



// ===============================
// EXPLICIT OBJECT TYPE
// ===============================

let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};



// ===============================
// TYPE ALIAS (REUSABLE)
// ===============================

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
};

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["Ginger", "Tea Leaves"]
};



// ===============================
// STRUCTURAL TYPING
// ===============================

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = {
    size: "500ml",
    material: "Steel"
};

smallCup = bigCup; // allowed



type Brew = { brewTime: number };

const coffee = {
    brewTime: 5,
    beans: "Arabica"
};

const chaiBrew: Brew = coffee;



// ===============================
// USER MODEL
// ===============================

type User = {
    userName: string;
    password: string;
};

const u1: User = {
    userName: "NilamRajput",
    password: "122"
};



// ===============================
// NESTED OBJECTS (REAL WORLD)
// ===============================

type Item = {
    name: string;
    quantity: number;
};

type Address = {
    street: string;
    pin: number;
};

type Order = {
    id: string;
    items: Item[];
    address: Address;
};

const order1: Order = {
    id: "ORD101",
    items: [
        { name: "Masala Chai", quantity: 2 },
        { name: "Ginger Tea", quantity: 1 }
    ],
    address: {
        street: "MG Road",
        pin: 110001
    }
};



// ===============================
// PARTIAL<T> (UPDATE PATTERN)
// ===============================

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating:", updates);
};

updateChai({ price: 30 });
updateChai({ isHot: false });
updateChai({});



// ===============================
// REQUIRED<T> (FINAL SUBMIT)
// ===============================

type ChaiOrder = {
    name?: string;
    quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("Order placed:", order);
};

placeOrder({
    name: "Masala Chai",
    quantity: 2
});



// ===============================
// PICK<T, K> (PUBLIC INFO)
// ===============================

type ChaiFull = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

type BasicChaiInfo = Pick<ChaiFull, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
};



// ===============================
// OMIT<T, K> (HIDE SECRETS)
// ===============================

type ChaiSecret = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
};

type PublicChai = Omit<ChaiSecret, "secretIngredients">;

const menuItem: PublicChai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};



// ===============================
// READONLY<T> (IMMUTABLE DATA)
// ===============================

type FixedChai = Readonly<Chai>;

const fixedChai: FixedChai = {
    name: "Green Tea",
    price: 15,
    isHot: true
};

// fixedChai.price = 20 ❌ error



// ===============================
// RECORD<K, V> (KEY-VALUE MAP)
// ===============================

type PriceMap = Record<string, number>;

const chaiPrices: PriceMap = {
    masala: 20,
    ginger: 25,
    lemon: 30
};



// ===============================
// ADVANCED COMBINATION
// ===============================

// Public + Update + No secrets
type PublicChaiUpdate = Partial<Omit<ChaiSecret, "secretIngredients">>;

const updateMenu = (data: PublicChaiUpdate) => {
    console.log("Menu updated:", data);
};

updateMenu({ price: 22 });
updateMenu({ name: "Special Chai" });
