/*
function runTwice(fun) {
    console.log("run once");
    console.log(fun);
    console.log("run twice");
    console.log(fun);

}

fun = function () {
    console.log("12b");
}

add = function () {
    console.log(2+3);
}

runTwice(fun);
runTwice(add);
*/

document.querySelector('.js-button').addEventListener('click', function () {
    const button = this;
    button.innerText = 'Starting...';

    setTimeout(function () {
        button.innerText = 'Finished!';
    }, 2000); // 1000 milliseconds = 1 second
});

const multiply = (x, y) => x * y
console.log(multiply(7, 20 ));

const countPositive = [1, -3, 5];
let result = [];
countPositive.forEach((num, index) => {
    if(num > 0)
        result.push(num);
    return result;
});
console.log(countPositive);
console.log(result);
console.log(result.length);

const arr = [1, 8, 3, 6, 8];
let number = 2;
const addNum = (array, num) => {
    result = array.map(arr => arr + num);
    return result;
}
console.log(addNum(arr, number));
