function cargarActv6() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <hr width="90%">
        <h1> Contador Regresivo (Con "While") </h1>
        <hr width="90%">

        <br><br>

        <label for="numeroInput">Iniciar Cuenta Regresiva desde: </label>
        <input type="number" id="numeroInput">

        <button id ="procesarNumero"> Iniciar </button>

        <br><br>
        <br><br>
        
        <p id="resultado"></p>

        `);

    document.getElementById("procesarNumero").addEventListener('click', procesarNumero);
}

function procesarNumero() {
    let number = document.getElementById("numeroInput").value;

    let NProcesado = countdownNumber(number);
    document.getElementById("resultado").innerHTML = NProcesado;


}

function countdownNumber(number) {
    let nro = number;
    let mensaje = "";
    while (nro >= 1 ) {
        nro = nro - 1;
        mensaje += document.getElementById("resultado").innerHTML = (`➖➖/ ${nro} /➖➖`);
        console.log(nro);
    }
    return mensaje;

}

export { cargarActv6, procesarNumero, countdownNumber }

