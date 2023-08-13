function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "This is not a number, please enter a number";
    }
    else {
        let result = number * number * number;
        return result;

    }
}




function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Enter two string!';
    }
    else if (string1.includes(string2)) {
        return true;
    }
    else
        return false;
}




function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return 'Invalid input'
        }
    }
    if (arr[0] < arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]]
        return arr;
    }
    else if (arr[0] == arr[1]) {
        return arr;
    }
    else
        return arr;
}



function findAddress(obj) {
    let street = '__';
    let house = '__';
    let society = '__';

    if (obj.street !== undefined) {
        street = obj.street;
    }
    if (obj.house !== undefined) {
        house = obj.house;
    }
    if (obj.society !== undefined) {
        society = obj.society;
    }

    return street + ',' + house + ',' + society;
}




function canPay(changeArray, totalDue) {
    if (arr.length == 0) {
        return 'Enter a valid array'
    }
    else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            sum += element;
        }
        if (sum >= totalDue)
            return true;

        else
            return false;
    }
}

