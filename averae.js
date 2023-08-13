function averageOfArrayElement(number) {
    let sum = 0;
    let average;
    for (let i = 0; i < number.length; i++) {
        let element = arr[i];
        sum += element;
    }
    average = sum/number.length;
    return average;
}
const arr =[34,8,394,49,92,48,29,85,20,54,4,93,40];
const elementAverage = averageOfArrayElement(arr);
console.log(elementAverage);