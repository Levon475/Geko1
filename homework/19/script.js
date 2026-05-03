const orders = [  {    id: 1,    user: "Ivan",    items: [      { name: "Laptop", price: 1200, qty: 1 },
{ name: "Mouse", price: 25, qty: 2 }    ],    status: "pending",    createdAt: "2026-04-28"  },  
{    id: 2,    user: "Anna",
items: [      { name: "Phone", price: 800, qty: 1 }    ],    status: "completed",    createdAt: "2026-04-20"  },  
{    id: 3,    user: "Ivan",  
items: [      { name: "Keyboard", price: 100, qty: 1 }    ],    status: "pending",    createdAt: "2026-04-29"  }];


function calculateOrderTotal(order){

    let total = 0

    order.items.forEach(item => {
        total += item.price * item.qty     
    });
    return total;
}


const firstOrderTotal = calculateOrderTotal(orders[0]);
console.log(firstOrderTotal);