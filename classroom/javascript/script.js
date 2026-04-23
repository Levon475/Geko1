const balance = document.getElementById("balance")
const quantity = document.getElementById("quantity")
const price = document.getElementById("price")
const buy = document.getElementById("buy")
const sell = document.getElementById("sell")

const data = {
    price: 499,
    quantity: 0,
    balance: 10000,
}

function render(){
    balance.textContent = data.balance
    quantity.textContent = data.quantity
    price.textContent = data.price
}

function updatePrice(){
    const timer = setInterval(() => {
        const random = Math.round(Math.random() * data.price * 0.05 - data.price * 0.04 / 2)
        data.price += random
        if(random > 0){
            price.style.color = "#0f0"
        }else if(random < 0){
            price.style.color = "#f00"
        }else{
            price.style.color = "#fff"
        }
        render()
    }, 2000);
}

buy.addEventListener("click", () => {
    if(data.balance >= data.price){
        data.balance -= data.price
        data.quantity++
    }
    render()
})
sell.addEventListener("click", () => {
    if(data.quantity > 0){
        data.balance += data.price
        data.quantity--
    }
    render()
})


updatePrice()
render()