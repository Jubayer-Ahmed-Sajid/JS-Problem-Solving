let arr = [34, 45, 85, 49, 29, 53, 64, 98,];
let largest_number = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest_number) {
        largest_number = arr[i];
    }

}
console.log(largest_number);

