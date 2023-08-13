let arr = [42, (-33), 59, 93, (-23), 59]
let sum = 0;
let positive_number;
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positive_number = arr[i]
        sum += positive_number;

    }


}
console.log(sum)