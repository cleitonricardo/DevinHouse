function executa() {
    var input = document.querySelector("#value");
    var texto = parseInt(input.value);
    var input1 = document.querySelector("#value2");
    var texto1 = parseInt(input1.value);
    var função = document.querySelector("#função");
    var executa = função.value;

    if (executa == 1) {
        resultado = texto + texto1;
    } else if (executa == 2) {
        resultado = texto - texto1;
    } else if (executa == 3) {
        resultado = texto / texto1;
    } else if (executa == 4) {
        resultado = texto * texto1;
    } else { resultado = 0 }

    const paragrafo = document.createElement("p");
    const texto12 = document.createTextNode(resultado);
    paragrafo.appendChild(texto12);

    const body = document.body;
    body.innerHTML += paragrafo.innerHTML;
}