function processData(input) {
    const senhas = (input.trim()).split("\n");
    const senhaCerta = senhas[0];
    const senhainserida = senhas[1];
    let contador = 0;
    let indice = 0;
    for (let i = 0; i < senhaCerta.length; i++) {
        while (indice < senhainserida.length) {
            if (senhaCerta[i] === senhainserida[indice]) {
                contador++;
                indice++;
                break
            } else {
                indice++;
            }
        }
    }
    console.log(senhaCerta.length === contador ? "SIM" : "NAO");

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
