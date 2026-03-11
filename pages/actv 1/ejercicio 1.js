function cargarActv1() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <h3>Mostrar numeros del 1 al 10 con "for" </h3>
        <hr width="60%">

        <br><br>
        <button id="mostrarNumeros">Mostrar</button>
        <br><br>

        `);

    document.getElementById("mostrarNumeros").addEventListener("click", mostrarNumeros);
}

function mostrarNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        alert(i);
    }
}

export { cargarActv1, mostrarNumeros };
