//Global variables
let operation = '';
let currentValue = '';
let previousValue = '';

document.addEventListener("DOMContentLoaded", function(){
    
    //All buttons
    let buttons = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    //Screen values position
    let Scurrent = document.querySelector('.current');
    let Sprevious = document.querySelector('.previous');


    buttons.forEach((number)=> number.addEventListener('click', function(){
        selectedNum(number.textContent);
        Scurrent.textContent = currentValue;
    }));

    operators.forEach((operator) => operator.addEventListener('click', function(e){
        selectedOp(e.target.textContent)
        Sprevious.textContent = previousValue + operation;
        Scurrent.textContent = currentValue;
    }));

    clear.addEventListener('click',function(){
        Scurrent.textContent = "";
        Sprevious.textContent = "";
        currentValue = "";
        previousValue = "";
        operation = "";
    });

    decimal.addEventListener('click', function(){
        selectedDec();
    });

    equal.addEventListener('click', function(){


        calculation();
        Sprevious.textContent = "";
        if(previousValue.length <= 14){
            Scurrent.textContent = previousValue
        }else{
            Scurrent.textContent = previousValue.slice(0,5) + "...";
        }

    })

});//end DOM

function selectedNum(num){
    if(currentValue.length >= 8){
        alert("You cant put more numbers...")
    }else{
        currentValue += num;
    }
    
}

function selectedOp(op){
    operation = op;
    previousValue = currentValue;
    currentValue = "";
}

function selectedDec(dec){
    if(!currentValue.includes('.')){
        currentValue += '.'
    }
}

function calculation(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operation === "+") {
        previousValue += currentValue;
    } else if(operation === "-"){
        previousValue -= currentValue;
    } else if(operation === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
   
    previousValue = previousValue.toString();
    currentValue = previousValue;//Se mantiene al presionar otro operador.

}