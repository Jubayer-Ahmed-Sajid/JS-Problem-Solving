function cheapestPhone(arr){
    let cheapest = arr[0];
    for(let i =0; i < arr.length; i++){
        if(cheapest.price > arr[i].price){
            cheapest = arr[i];
        }

    }
    return cheapest;

}
const phones =[
    {name: 'samsung', price: 39000, Storage:256, ram:8},
    {name: 'huwawei', price: 30000, Storage:128, ram:8},
    {name: 'infinix', price: 18000, Storage:128, ram:6},
    {name: 'vivo', price: 99000, Storage:1024, ram:16},
    {name: 'oppo', price: 5000, Storage:128, ram:6},
    {name: 'xiaomi', price: 73000, Storage:512, ram:12},
    {name: 'oneplus', price: 61000, Storage:256, ram:12}
]
const cheapestBrand = cheapestPhone(phones);
console.log(cheapestBrand);