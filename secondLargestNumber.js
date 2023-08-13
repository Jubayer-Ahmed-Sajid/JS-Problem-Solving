function secondLargestNumber(number) {
    number.sort((a, b) => a - b);
    let largest = number[0];
    let secondLargest;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
            secondLargest = number[i - 1];
        }
    }
    return secondLargest;

}
const arr = [94,44, 89, 92,92,4, 89, 43, 94,94]
const secondLargestElement = secondLargestNumber(arr);
console.log(secondLargestElement);

