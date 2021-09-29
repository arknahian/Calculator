var userValue = document.getElementsByClassName("numb-btn");
for (let i = 0; i < userValue.length; i++) {
    const value = userValue[i];
    value.addEventListener("click", function (event) {
        var input = event.target.innerText;
        input = +input;
        var interface = document.getElementById("interface-display").value = input;
        var newInterface = event.target.innerText;
        document.getElementById("interface-display").value = interface + newInterface;
    })
}