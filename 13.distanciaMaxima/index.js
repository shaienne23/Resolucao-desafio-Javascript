function processData(input) {
    const entradasSeparadas = (input.trim()).split("\n");

    const funcionarios = entradasSeparadas[0] * 1;
    const Ponto = entradasSeparadas.filter(ponto => ponto.includes(" ")).map(pontos => {
        const arrayPontos = pontos.split(" ");
        return {
            x: arrayPontos[0] * 1,
            y: arrayPontos[1] * 1,
        }
    });
    let DistanciaMaior = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < funcionarios; i++) {
        const funcionario1 = Ponto[i];

        for (let j = i + 1; j < funcionarios; j++) {
            const funcionario2 = Ponto[j];
            const distancia = Math.sqrt(((funcionario2.x - funcionario1.x) ** 2) + ((funcionario2.y - funcionario1.y) ** 2))
            if (distancia > DistanciaMaior) {
                DistanciaMaior = distancia;
            }
        }
    }
    if (!funcionarios) {
        console.log(0);
    } else {
        console.log(DistanciaMaior);
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

