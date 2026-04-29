class Car {
    constructor(brand,model,color,year){
       this.brand = brand
       this.model = model        
       this.color = color
       this.year = year
    }

    getInfo(){
        console.log(`Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին`)
    }

    getAge(){
        console.log(`Այս մեքենան  ${2026 - this.year} տարվա մեքենա  է`)
    }

}

const mers = new Car(`Mercedes-benz`, `E350`, `սև`, 2020)
const bm = new Car(`BMW`, `E39`, `սպիտակ`, 1999)



const cars = [mers, bm]

cars.forEach((car) => {
    car.getInfo()
    car.getAge()
})