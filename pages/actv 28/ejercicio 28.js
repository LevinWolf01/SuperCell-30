export function cargarActv28() {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Criba de Eratóstenes con for anidados </h3>
        <hr width="60%">

        <br><br>

        <label for="primeLimitInput">Ingrese el límite (número mayor o igual a 2):</label>
        <input type="number" id="primeLimitInput">

        <button id="btnPrimos">Calcular primos</button>

        <br><br>

        <p id="resultado28"></p>
    `);

    document.getElementById("btnPrimos").addEventListener("click", encontrarPrimos);
}

// Función principal 
export function encontrarPrimos() {
    const limit = parseInt(document.getElementById("primeLimitInput").value);
    const salida = document.getElementById("resultado28");

    if (isNaN(limit) || limit < 2) {
        salida.innerText = "Ingrese un número válido mayor o igual a 2.";
        return;
    }

    const primos = sieveOfEratosthenes(limit);
    updatePrimeResult(primos);
}

// Función que implementa la Criba de Eratóstenes.
export function sieveOfEratosthenes(limit) {
    const esPrimo = new Array(limit + 1).fill(true);
    esPrimo[0] = false;
    esPrimo[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (esPrimo[i]) {
            for (let j = i * i; j <= limit; j += i) {
                esPrimo[j] = false;
            }
        }
    }

    const resultado = [];
    for (let i = 2; i <= limit; i++) {
        if (esPrimo[i]) resultado.push(i);
    }

    return resultado;
}

// Función que actualiza el DOM.
export function updatePrimeResult(primesArray) {
    const p = document.getElementById("resultado28");
    p.innerHTML = `<strong>Números primos:</strong> ${primesArray.join(", ")}`;
}