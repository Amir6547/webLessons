// For loop

/**
 * for (counter, condition, increment/decrement){
 *  //code to execute
 * }
 */


/* for (i = 1; i <= 100; i++) {
    console.log(i)
} */

/* for (i = 100; i>=1; i--) {
    console.log()
} */

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

let countriesLength = countries.length;

for (i=0; i < countriesLength; i++) {
    console.log(countries[i]);
}

const phones = ['iPhone', 'Samsung', 'Nokia', 'Huawei', 'Sony'];

let phonesLength = phones.length;

for (i=0; i < phonesLength; i++) {
    console.log(phones[i]);
}


const cars = [
    {brand: "Toyota", model: "Camry", year: 2024, price: 6000 },
    {brand: "Tesla" , model: "S" , year:2022 , price: 106000 },
    {brand: "Jaguar", model: "F-pace", year:2024, price:40000},
    {brand: "Nissan", model: "Qashqai", year:2024,price:40000},
    {brand: "Land Rover", model: "Range Rover", year: 2022, price: 90000},
    {brand: "Audi", model: "A6 Avant", year: 2023, price: 50000},
    {brand: "BMW", model: "X7", year: 2023, price: 80000},
];


let carLength = cars.length;

for (i = 0; i < carLength; i++){
    console.log(`Brand: ${cars[i].brand} model: ${cars[i].model} year: ${cars[i].year} price: ${cars[i].price.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}\n `)
}


//create an array of objects containing different kind of apartments, their features, location and price. Then display each of the items in the array like in the case of cars above.