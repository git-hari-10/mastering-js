function handleKeydown(event) {
    if(event.key === 'Enter') {
        calcAmt();
    }
}

function calcAmt() {
    const inputElement = document.querySelector('.js-input-cost')

    let cost = Number(inputElement.value)

    if(cost < 50){
        cost = cost + 10;
    }

    document.querySelector('.js-result').innerHTML = `$${cost.toFixed(2)}`;
}

function Subscribe() {
    const buttonElement = document.querySelector('.js-sub-button');

    if(buttonElement.innerText === 'Subscribe')
        buttonElement.innerHTML = 'Subscribed';
    else
        buttonElement.innerHTML = 'Subscribe';
}