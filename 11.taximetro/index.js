
function solucao(min, km) {

    const precoKm = 70;
    const precoMin = 50;
    const precoKmExc = 50;
    const precoMinExc = 30;

    const parametroExcMin = (min - 20) * precoMinExc;
    const parametroExcKm = (km - 10) * precoKmExc;

    let valorKmTotal = 0
    let valorMinTotal = 0

    if (min > 20) {
        valorMinTotal = (precoMin * 20) + parametroExcMin;
    } else {
        valorMinTotal = min * precoMin;
    }

    if (km > 10) {
        valorKmTotal = (precoKm * 10) + parametroExcKm;
    } else {
        valorKmTotal = km * precoKm;
    }

    console.log((Math.trunc(valorMinTotal + valorKmTotal)));


}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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