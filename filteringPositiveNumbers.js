function positiveNumbers(arr){
    let postiveArray =[]
    for(i = 0; i  < arr.length; i++){
        let element = arr[i];
        if(element >= 0){
            postiveArray.push(element)
        }
        else 
        break;
    }
    return postiveArray;

}
const number =[ 54,33,85,94,20,92,19,49,39,-44,-384,49,20];
const positiveNumberArray = positiveNumbers(number);
console.log(positiveNumberArray);