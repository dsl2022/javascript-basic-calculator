function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    
    //TODO: uncomment the following code, and validate the numbers are not empty
    // if (input1 === "" || input2 === "") {
    //     alert("Please enter both numbers.");
    //     return;
    // }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    //TODO: your code here, add the 2 numbers
    

    document.getElementById("result").textContent = result;
}
