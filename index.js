// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*"){
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function add(num1, num2){
        return num1 + num2
    },
    subtract: function subtract(num1, num2){
        return num1 - num2
    },
    
    multiply: function multiply(num1, num2){
        return num1 * num2
    },
    
    divide: function divide(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(start, arr){
    let a = start;
    for (let i = 0; i < arr.length; i++){
        a = arr[i](a);
    }
    return a
}