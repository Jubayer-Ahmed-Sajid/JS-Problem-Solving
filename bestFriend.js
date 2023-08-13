function bestFriend(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest.length < arr[i].length)
            largest = arr[i];

    }

    return largest;


}
const friends = ['GolamRabbi', 'Esmail', 'Proshanto', 'TanvirAhmed', 'Shihab', 'Shorif', 'Himel', 'Amdad', 'Sakib', 'Nabin'];
const largestName = bestFriend(friends);
console.log(largestName);