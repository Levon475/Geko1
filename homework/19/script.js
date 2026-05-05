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

function getUserPendingOrders(orders, username){

    let x = orders.filter(order => {
        return order.user === username && order.status === "pending";
    })
    return x;
}

function getTotalRevenue(orders) {

    let y = 0
    const completedOrders = orders.filter(order => order.status === "completed");

   completedOrders.forEach(order => {
        y += calculateOrderTotal(order);
    });
      return y;
}

let groups = {}
let totals = {}
orders.forEach(order => { 

    let userName = order.user
    if (!groups[userName]) { 
    groups[userName] = []
    }

    groups[userName].push(order)
    
    
    if (!totals[order.user]) { totals[order.user] = 0; }
    if (order.status === "completed") { 

    totals[order.user] += calculateOrderTotal(order);
    
}
    
});


let usersArray = Object.keys(totals).map(name => {
    return { user: name, total: totals[name] };
});

usersArray.sort((a, b) => b.total - a.total)


const firstOrderTotal = calculateOrderTotal(orders[0]);
console.log(firstOrderTotal);
const ivanOrders = getUserPendingOrders(orders,"Ivan")
console.log(ivanOrders)
const Total = getTotalRevenue(orders)
console.log(Total);
console.log(groups);
console.log(usersArray.slice(0, 3))