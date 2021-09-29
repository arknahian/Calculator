var numSymbol = document.getElementsByClassName("num-symbol");
for (let i = 0; i < numSymbol.length; i++) {
    const element = numSymbol[i];
    element.addEventListener("click", function (event) {
        document.getElementById("interface-display").value += event.target.innerText;
    })
}

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("interface-display").value = "";
    document.getElementById("remaining").innerText = "";
})


var mathSymbol = document.getElementsByClassName("math-symbol");
for (let i = 0; i < mathSymbol.length; i++) {
    const element = mathSymbol[i];
    element.addEventListener("click", function () {
        var remainingDisplay = document.getElementById("remaining");
        remainingDisplay.style.display = "block";
        remainingDisplay.innerText = document.getElementById("interface-display").value + element.innerText;
        document.getElementById("interface-display").value = "";

    })
}



document.getElementById("isEqual").addEventListener("click", function () {
    document.getElementById("result").style.display = "block";
    var x = document.getElementById("remaining").innerText;
    x = parseFloat(x);
    var y = document.getElementById("interface-display").value;
    y = parseFloat(y);
    var xInput = document.getElementById("remaining").innerText;
    var xDivideProperty = x + "/";
    var xMultiplyProperty = x + "*";
    var xMinusProperty = x + "-";
    var xPlusProperty = x + "+";
    console.log(xInput == xDivideProperty);
    if (xInput == xDivideProperty) {
        console.log(x / y);
        document.getElementById("result").innerText =  x/ y;
    }
    else if (xInput == xMultiplyProperty) {
        console.log(x * y);
        document.getElementById("result").innerText =  x * y;
    }
    else if (xInput == xMinusProperty) {
        console.log(x - y);
        document.getElementById("result").innerText =  x - y;
    }
    else if (xInput == xPlusProperty) {
        console.log(x + y);
        document.getElementById("result").innerText =  x + y;
    }

})
