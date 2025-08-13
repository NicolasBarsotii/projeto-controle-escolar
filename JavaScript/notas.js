const botaoCalcular = document.getElementById("botao-calcular");
const containerResultado = document.getElementById("container-resultado");

document.getElementById("nota-avaliaçao").addEventListener("input", function() {
    limitarNota(this, 4);
});
document.getElementById("nota-participaçao").addEventListener("input", function() {
    limitarNota(this, 4);
});
document.getElementById("nota-ead").addEventListener("input", function() {
    limitarNota(this, 2);
});

function limitarNota(input, max) {
    if (parseFloat(input.value) > max) {
        input.value = max;
    }
}

botaoCalcular.addEventListener("click", calcularMedia);

function calcularMedia() {
    const notaAvaliacao = parseFloat(document.getElementById("nota-avaliaçao").value);
    const notaParticipacao = parseFloat(document.getElementById("nota-participaçao").value);
    const notaEad = parseFloat(document.getElementById("nota-ead").value);

    if (isNaN(notaAvaliacao) || isNaN(notaParticipacao) || isNaN(notaEad)) {
        alert("Por favor, preencha todas as notas para calcular a média.");
        containerResultado.innerHTML = '';
        return;
    }

    const somaTotal = notaAvaliacao + notaParticipacao + notaEad;
    let resultado = "";
    let cor = "";

    if (somaTotal >= 6) {
        resultado = "Aprovado";
        cor = "green";
    } else {
        resultado = "Reprovado";
        cor = "red";
    }

    containerResultado.innerHTML = '';
    
    const divSoma = document.createElement("div");
    divSoma.id = "soma-total";
    divSoma.textContent = somaTotal;
    
    const divResultado = document.createElement("div");
    divResultado.id = "resultado-final";
    divResultado.textContent = resultado;
    divResultado.style.color = cor;

    containerResultado.appendChild(divSoma);
    containerResultado.appendChild(divResultado);
}