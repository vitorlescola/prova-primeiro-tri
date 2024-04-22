function getSuggestions() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(income) || isNaN(expenses)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    const savings = income - expenses;

    let suggestion = "";

    if (savings > 0) {
        suggestion = "Você está economizando dinheiro! Considere investir parte dessas economias para aumentar seu patrimônio.";
    } else if (savings < 0) {
        suggestion = "Atenção! Suas despesas estão superando sua renda. Reveja seus gastos e procure formas de economizar.";
    } else {
        suggestion = "Você está equilibrando suas finanças, parabéns!";
    }

    document.getElementById("suggestion").textContent = suggestion;
}