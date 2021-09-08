init();
function select(rectNumber) {

// chosenBar = rectNumber == chosenBar ? "": rectNumber |https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

if(rectNumber !== chosenBar){
    chosenBar = rectNumber;
    disabled = false;
} else {
    chosenBar = "";
    disabled = true;
}

init();
}

function addBar() {
    

    if (inputValue > 0 && inputValue < 10) {
        numbers.push(inputValue);
        
        }
        else
        {
            alert("Invalid number");
        }

    init(); 

}

function deleteBar() {
    
    const removed = numbers.splice(chosenBar -1, 1);
    chosenBar = '';

     init();

 }

function changeBar() {

    if (chosenBar && inputValue > 0 && inputValue < 10) {
        numbers[chosenBar - 1] = inputValue;
    }
    else
    {
        alert("Invalid number");
    }
    init();
}


