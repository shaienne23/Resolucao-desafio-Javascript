


function solucao(lista) {
    const maiorIdade = 18;

    let adultoMaisJovem = Infinity;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= maiorIdade && lista[i] < adultoMaisJovem) {
            adultoMaisJovem = lista[i];
        }
    }
    if (adultoMaisJovem !== Infinity) {
        console.log(adultoMaisJovem);
    } else {
        console.log("CRESCA E APARECA");
    }

}
function processData(input) {
    //Enter your code here
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
