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
