function solucao(lista) {

    let totalDinheiro = 0
    let dias = lista.length;

    for (dinheiro of lista) {
        totalDinheiro += dinheiro;
    }

    let media = totalDinheiro / dias;
    console.log(media);

}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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