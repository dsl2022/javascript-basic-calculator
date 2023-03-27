function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;

    if (input1 === "" || input2 === "") {
        alert("Please enter both numbers.");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    document.getElementById("result").textContent = result;
}
