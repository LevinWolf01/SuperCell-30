function cargarActv5() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

        <br><br>
            <hr width="60%">
            <h3> Calcular Factorial (Con ciclo "For") </h3>
            <hr width="60%">
            <br><br>
            <h4> Vamos a calcular: 7! </h4>
            <br><br>
            <button id="calcularFactorial"> Mostrar Factorial </button>
        <br><br>

        `);

    document.getElementById("calcularFactorial").addEventListener("click", calcularFactorial);
}

function calcularFactorial() {
    let num = 7;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert("EL factorial de " + num + " es: " + factorial);
    console.log("EL factorial de " + num + " es: " + factorial);

}

export { cargarActv5, calcularFactorial };
