// Checks whether credit cards are valid using the Luhn algorithm

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const isEven = (number) => {
    if ((number % 2) === 0) {
        return true;
    }
    else {
        return false;
    }
}

let validCards = [];
let invalidCards = [];
let invalidCardCompanies = [];
let invalidAmex = [];
let invalidVisa = [];
let invalidMastercard = [];
let invalidDiscover = [];
let invalidUnknown = [];

let validateCred = (arr) => {
    let reversedArr = arr.slice();
    let cardNumber = arr;
    reversedArr.reverse();
    //console.log(`Checking card: ` + arr);
    //console.log(`Initial reversed arrary: ` + reversedArr);
    for (let i = 0; i < reversedArr.length; i++) {
        if (!isEven(i)) {
            reversedArr[i] = reversedArr[i] * 2;
            if (reversedArr[i] > 9) {
                reversedArr[i] = reversedArr[i] - 9;
            }
        } 
    }
    let cardNumberString = cardNumber.join('');
    //console.log(`Converted array: ` + reversedArr);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = reversedArr.reduce(reducer);
    if ((sum % 10) === 0) {
        validCards.push(cardNumberString);
        //console.log(`Sum of all digits = ` + sum);
        console.log(`Valid credit card number: ` + cardNumberString);
        console.log(`-------------------`);
    }
    else {
        invalidCards.push(cardNumberString);
        //console.log(`Sum of all digits = ` + sum);
        console.log(`Invalid credit card number: ` + cardNumberString);
        console.log(`-------------------`);
    }
} 

let findInvalidCards = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        validateCred(arr[j]);
    }
    console.log(`The following cards are invalid: `+ invalidCards);
}

let idInvalidCompanies = (arr) => {
    for (n = 0; n < arr.length; n++) {
        let firstDigit = arr[n][0];
        switch(firstDigit) {
            case '3':
                if (invalidCardCompanies.indexOf('Amex (American Express)') === -1) {
                    invalidCardCompanies.push('Amex (American Express)');
                }
                invalidAmex.push(arr[n]);
                break;
            case '4':
                if (invalidCardCompanies.indexOf('Visa') === -1) {
                    invalidCardCompanies.push('Visa');
                }
                invalidVisa.push(arr[n]);
                break;
            case '5': 
                if (invalidCardCompanies.indexOf('Mastercard') === -1) {
                    invalidCardCompanies.push('Mastercard');
                }
                invalidMastercard.push(arr[n])
                break;
            case '6':
                if (invalidCardCompanies.indexOf('Discover') === -1) {
                    invalidCardCompanies.push('Discover');
                }
                invalidDiscover.push(arr[n]);
                break;
            default:
                invalidCardCompanies.push('Company not found');
                invalidUnknown.push(arr[n]);
                break;
        }
    }
    console.log(`The following companies may have issued invalid cards: ` + invalidCardCompanies);
}

let showInvalid = () => {
    console.log(`Invalid Amex cards: `+ invalidAmex);
    console.log(`Invalid Visa cards: `+ invalidVisa);
    console.log(`Invalid Mastercard cards: `+ invalidMastercard);
    console.log(`Invalid Discover cards: `+ invalidDiscover);
    console.log(`Invalid unknown cards: `+ invalidUnknown);
}


