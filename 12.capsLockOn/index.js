function processData(input) {
    const letraMinus = /([a-z])/g;
    const letraMaius = /([A-Z])+/g;
    const primeiraLetra = input.substring(0, 1);
    const restantePalavra = (input.substring(1)).trim();
    const cadaLetra = restantePalavra.split("");

    let cadaLetraUpperCase = cadaLetra.every(function (letra) { return letra.match(letraMaius) });

    if (primeiraLetra.match(letraMinus) && cadaLetraUpperCase) {
        console.log(primeiraLetra.toUpperCase().concat('', restantePalavra.toLowerCase()));
    } else if (primeiraLetra.match(letraMaius) && cadaLetraUpperCase) {
        console.log(input.toLowerCase());
    } else {
        console.log(input);
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