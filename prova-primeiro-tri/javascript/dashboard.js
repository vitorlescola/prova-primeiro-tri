let Meta = 0;
let atual = 0;
let myChart;

function criarGrafico() {
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Meta', 'atual'],
            datasets: [{
                label: 'Valores',
                data: [Meta, atual],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function atualizarGrafico() {
    Meta = parseFloat(document.getElementById("Meta").value) || 0;
    atual = parseFloat(document.getElementById("atual").value) || 0;

    if (!myChart) {
        criarGrafico();
    } else {
        myChart.data.datasets[0].data = [Meta, atual];
        myChart.update();
    }

    if (Meta === atual) {
        alert("Parabéns, você atingiu a sua meta!");
    }
}