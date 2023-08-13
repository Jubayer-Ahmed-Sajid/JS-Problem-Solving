function findingLargestNumber(a,b,c){
    if(a > b && a >c){
        return a;
    }
    else if( b>a && b>c){
        return b;
    }
    else
    return c;
}
const num1 = 88;
const num2 = 99;
const num3 = 94;
const largest = findingLargestNumber(num1,num2,num3);
console.log(largest,' is the largest number');

// Alternative way
const largestNumber = Math.max(num1,num2,num3);
console.log(largestNumber);