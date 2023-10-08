function positiveCallBack(){
    console.log("This callback works!");
}
function negativeCallBack(){
    console.log("This callback does not work!");
}

function receivesAFunction(callBack){
    return callBack();
}

receivesAFunction(positiveCallBack);
receivesAFunction(negativeCallBack);

function returnsANamedFunction(){
    return function printStatement(){
        console.log("This is my printed statement!");
    }
}

const myPrint = returnsANamedFunction();
myPrint(); 

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is my anonymous function!");
    }
}

const anotherPrint = returnsAnAnonymousFunction();
anotherPrint();
