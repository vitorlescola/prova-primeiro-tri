function calculateCashback() {  //função que calcula o cashback
    var quantidade = parseFloat(document.getElementById("quantidade").value);
    var porcentagem = parseFloat(document.getElementById("porcentagem").value);

    if (isNaN(quantidade) || isNaN(porcentagem)) {
        document.getElementById("result").innerHTML = "Porfavor insira valores validos.";
    } else {
        var cashback = (quantidade * porcentagem) / 100;
        document.getElementById("result").innerHTML = "Cashback: R$" + cashback.toFixed(2);
    }
}