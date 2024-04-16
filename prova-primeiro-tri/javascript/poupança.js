function calculateSavings() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value) / 100;
    var anos = parseFloat(document.getElementById("anos").value);

    var amount = principal * Math.pow((1 + rate), anos);

    document.getElementById("result").innerHTML = "Total: R$ " + amount.toFixed(2);
}