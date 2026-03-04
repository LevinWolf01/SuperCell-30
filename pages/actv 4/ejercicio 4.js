function cargarActv4() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <hr width="60%">
            <h3> Tabla de multiplicar del 5 (Con Do-While) </h3>
            <hr width="60%">
            <br><br>
            <button id="mostrarTabla"> Mostrar Tabla </button>

        `);

    document.getElementById("mostrarTabla").addEventListener("click", mostrarTabla)
}

function mostrarTabla() {
    let num = 5;
    let texto = "";

    do {
        for (let i = 1; i <= 10; i++) {
            texto += num + " x " + i + " = " + num * i + "\n";
        }
    } while (num++ < 5);

    alert(texto);
}

export { cargarActv4, mostrarTabla };
