// union and anyy 

let subs: number | String = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "Nilam";
// ❌ Error: "Nilam" is not part of the allowed literal union

let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "middle";
// ✅ valid reassignment

const orders = ["12", "23", "43", "32"];

let currentorder: String | undefined;
// union type (NOT any): can be String or undefined

for (let order of orders) {
    if (order == "43") {
        currentorder = order;
        break;
    }
    currentorder = "if not Ture";
    // ❌ Error: invalid syntax due to extra character `a`
}

console.log(currentorder);
