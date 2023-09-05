

function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3']

    const manilha = cartas.indexOf(carta);

    let indice = (manilha + 1) % cartas.length;
    console.log(cartas[indice]);

}

function processData(input) {
    solucao(input);
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