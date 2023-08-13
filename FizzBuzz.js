function FizzBuzz(arr){
    let elements=[];

    for(let i = 0; i < arr.length; i++){
        let element = arr[i]

        if( element % 3==0 && element % 5==0){
            elements.push('FizzBuzz')
        }
        else if(element % 3 ==0){
            elements.push('Fizz')
        }
        else if(element % 5== 0){
            elements.push('Buzz')
        }
        else 
        elements.push(arr[i])
    }
    return elements;

}
const numbers = [33,28,74,98,29,49,63,89,29,30,49,38,59,33,49,30,99];
const FizzAndBuzz = FizzBuzz(numbers);
console.log(FizzAndBuzz);