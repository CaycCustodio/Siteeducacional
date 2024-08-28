// Calendário 
var iframeContainer = document.getElementById("iframeContainer");

// Função para abrir o iframe quando a âncora é clicada
function abrirIframe() {
    iframeContainer.innerHTML = '<iframe src="/Pdf/Calendario-Academico-2023---rev.-2023-01-30.pdf" width="800" height="600"></iframe>';
    var btnAbrirIframe = document.getElementById("btnAbrirIframe");
    btnAbrirIframe.onclick = fecharIframe;
}

// Função para fechar o iframe quando a âncora é clicada
function fecharIframe() {
    iframeContainer.innerHTML = '';
    var btnAbrirIframe = document.getElementById("btnAbrirIframe");
    btnAbrirIframe.onclick = abrirIframe;
}