function wordReverse(str) {
    let newSplit = str.split(' ')
    const reverse = []
    for (let i = newSplit.length - 1; i >= 0; i--) {
        let element = newSplit[i];
        reverse.push(element)
    }
    const reversed = reverse.join(' ')
    return reversed;

}

const string = "I am a good boy";
let reverseWord = wordReverse(string);
console.log(reverseWord);