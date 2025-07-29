/*
const array = ['hello', 'world','search','good','search'];

function checkSearch(array) {
    let found = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'search') {
            console.log(i);
            found = true;
        }
    }
    if(!found) {
        console.log(-1);
    }
    return array;
}
checkSearch(array);
*/

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

function uniQue(array) {
    let exists = false;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists)
            result.push(array[i]);
    }
    return result;
}

console.log(uniQue(['red', 'blue', 'green', 'blue']));
console.log(uniQue(['red', 'green', 'black', 'brown','green']));

/*
function removeEgg(a) {
    let reversed = a.slice().reverse();
    let result= [];
    let eggCount = 0;
    for (let i = 0; i < reversed.length; i++) {
        let word = reversed[i].toLowerCase();
        if (word === 'egg' || word === 'eggs' && eggCount<2) {
            eggCount++;
            continue;
        }
        result.push(word);
    }
    return result.reverse();
}

const array = ['Eggs','apple','eggs','banana','eggs','mango','grapes'];
console.log(removeEgg(array));
console.log(array);
*/
/*
const fizzBuzz = [];
for (let i = 1; i <= 20; i++) {
    if( i % 3 === 0 && i % 5 === 0 )
        fizzBuzz.push('fizzbuzz');
    else if ( i % 3 === 0)
        fizzBuzz.push('fizz');
    else if ( i % 5 === 0)
        fizzBuzz.push('buzz');
    else
        fizzBuzz.push(i);
}
console.log(fizzBuzz);
*/

