


function solucao(precos) {
    let precoTotal = 0;
    let menorCompra = precos[0];
    let valorDesconto = 0;
    let valorAPagar = precoTotal - valorDesconto;
    let quantidadeItens = 3;

    for (preco of precos) {
        precoTotal += preco
    }

    if (precos.length >= quantidadeItens) {
        for (let i = 1; i < precos.length; i++) {
            if (precos[i] < menorCompra) {
                menorCompra = precos[i];
            }
            valorDesconto = menorCompra * 0.5

        }
        console.log(precoTotal - valorDesconto)

    } else { console.log(precoTotal) }
}



function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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