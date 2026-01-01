// type - annotation / interpretation

l// TypeScript infers this as: string
let drink = "Chai and coldriks";
// drink: string ✅


// TypeScript infers this as: number
let cups = Math.random() > 0.5 ? 10 : 5;
// cups: number ✅


// TypeScript infers this as: string
let channelName = "ApnaSchool";

// ❌ ERROR 1:
// channelName is string, but a number is being assigned
// ❌ ERROR 2:
// 127.0.0.1 is not a valid number (it is an IP address, should be string)
channelName = 127.0.0.1;


// Explicit type annotation using String object (allowed but not recommended)
let chaiFlavor: String = "Masala cahi";

// Reassignment is allowed because value is still a string
chaiFlavor = "Ginger tea";
// chaiFlavor: String ⚠️ (should be `string` in real projects)


// Explicit boolean type
let chaiOrder: boolean = true;

// ❌ ERROR:
// boolean can only be true or false
// number is not assignable to boolean
chaiOrder = 66;


