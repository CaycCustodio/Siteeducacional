const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".seach-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});



// Dados do gráfico
var data = {
    labels: ['Simulados 1', 'Simulados 2', 'Simulados 3', 'Simulados 4', 'Simulados 5', 'Simulados 6'],
    datasets: [{
        label: 'Notas',
        data: [12, 14, 10, 5, 9, 9],
        backgroundColor: 'rgb(131, 120, 247, 0.5)',
        borderColor: 'rgba(131, 120, 247, 1)',
        borderWidth: 1
    },
    {
        label: 'Média',
        data: [10, 9, 10, 5, 7, 9], // Valores da média das vendas
        type: 'line', // Define o tipo de gráfico como linha
        fill: false, // Não preenche a área abaixo da linha
        borderColor: 'rgb(68, 63, 124)',
        borderWidth: 2,
        pointRadius: 0 // Remove os pontos da linha
    }
]
};


// Configurações do gráfico
var options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 5 // Define o tamanho do intervalo no eixo y
            }
        }
    }
};

// Criação do gráfico de barras
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});


