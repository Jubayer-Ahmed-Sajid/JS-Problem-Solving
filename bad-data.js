function badData(arr){
    let counter =0;
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element < 0){
            counter++;
        }
    }
    return counter;

}
const number =[32,83,20,39,13,33,89,33,39,2,23,49,93,99];
const badDataCounter = badData(number);
console.log(badDataCounter);