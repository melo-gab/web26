function calcularIMC(peso, altura) {
    return Math.round(peso / (altura * altura));
}

const classificarIMC = function (imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
};


const gerarRelatorio = () => {
    const dados = [
        { nome: "Ana Silva", altura: 1.65, peso: 60 },
        { nome: "Bruno Costa", altura: 1.80, peso: 95 },
        { nome: "Carla Dias", altura: 1.60, peso: 45 },
        { nome: "Daniel Meireles", altura: 1.75, peso: 72 },
        { nome: "Elisa Borges", altura: 1.68, peso: 92 }
    ];

    let tabela = "<table><tr><th>Nome</th><th>IMC</th><th>Classificação</th></tr>";

    for (let pessoa of dados) {
        let imc = calcularIMC(pessoa.peso, pessoa.altura);
        let classificacao = classificarIMC(imc);
        tabela += `<tr><td>${pessoa.nome}</td><td>${imc}</td><td>${classificacao}</td></tr>`;
    }

    tabela += "</table>";
    document.getElementById("resultado").innerHTML = tabela;
};





