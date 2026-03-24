function cargarActv3() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <br><br>
        <hr width="90%">
        <h3> Mostrar Numeros Pares del 1 al 20 (usando ciclo "for") </h3>
        <hr width="60%">
        <br><br>
        <button id="mostrar"> Mostrar Numeros Pares </button>
        <br><br>

    `);

    document.getElementById("mostrar").addEventListener('click', mostrar);
}

function mostrar() {
    for (let i = 0; i <= 20; i += 2){
        console.log(i);
        alert(i);

    }
}

export { cargarActv3, mostrar };
