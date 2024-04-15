let savedValue = 0;

function saveValue() {
    savedValue = parseFloat(document.getElementById("inputValue").value);
    document.getElementById("result").innerText = "Valor na conta: " + savedValue.toFixed(2);
}

function performOperation() {
    const operação = document.getElementById("operação").value;
    const changeAmount = parseFloat(document.getElementById("changeAmount").value);

    if (isNaN(changeAmount)) {
        alert("Please enter a valid number.");
        return;
    }

    if (operação === "add") {
        savedValue += changeAmount;
    } else if (operação === "subtract") {
        savedValue -= changeAmount;
        if (savedValue <= 0) {
            alert("Cuidado, você vai entrar no negativo!.");
        }
    }

    document.getElementById("result").innerText = "Saved Value: " + savedValue.toFixed(2);
}