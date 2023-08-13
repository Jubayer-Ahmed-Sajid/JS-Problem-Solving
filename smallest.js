function findingSmallestNumber(number) {
    let element = number[0]
    for (i = 0; i < number.length; i++) {
        if (element > number[i]) {
            element = number[i]

        }
    }
    return element;
}
const arr = [33, 45, 35, 445, 334, 53, 32, 29, 38, 94, 39];
const smallestNumber = findingSmallestNumber(arr);
console.log(smallestNumber);