

function solucao(texto) {
    const semEspacos = texto.trim()
    const palavras = semEspacos.split(" ")//
    const arrayPalavras = palavras.filter((palavra) => palavra !== "")
    const numeroDePalavras = arrayPalavras.length
    console.log(numeroDePalavras)
}

function processData(input) {
    solucao(input)
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