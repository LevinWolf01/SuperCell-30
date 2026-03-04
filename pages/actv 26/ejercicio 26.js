export function cargarActv26() {
    const contenedor = document.getElementById("resultados");

    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Subvector de suma máxima con for anidados (Kadane) </h3>
        <hr width="60%">
        <br><br>

        <h4>¿Qué es el Algoritmo de Kadane?</h4>
        <p>
        Kadane es un método rápido para encontrar el <b>subarray con la suma máxima</b> recorriendo el arreglo solo una vez. 
        Durante el proceso mantiene dos valores: <b>currentSum</b> (la suma actual) y <b>maxSum</b> (la suma más alta registrada). 
        Si la suma actual se vuelve negativa, se reinicia a cero porque un número negativo solo empeoraría las sumas siguientes.
        </p>

        <h4>Ejemplo:</h4>
        <p>
        Para el array <b>[4, -1, 2, -6, 3, 5]</b>, Kadane detecta que la mejor suma es <b>5</b>, obtenida del subarray <b>[4, -1, 2]</b>, 
        y lo hace sin probar todas las combinaciones posibles.
        </p>

        <br>
        <hr width="30%">
        <br>

        <label for="subarrayInput"> Vector (ej: -2,1,-3,4,-1,2,1,-5,4): </label>
        <input id="subarrayInput" type="text">
        <br><br>
        <button id="btnSubarrayMax"> Calcular subarray máximo </button>

        <br><br>

        <p id="resultado26"></p>
    `);

    document.getElementById("btnSubarrayMax")
        .addEventListener("click", encontrarSubarrayMaximo);
}

//----------------------------------------------------------------------------------------------------------------------------
// Función principal
export function encontrarSubarrayMaximo() {
    const input = document.getElementById("subarrayInput").value.trim();
    const salida = document.getElementById("resultado26");

    if (!input) {
        salida.outerHTML = `<p id="resultado26">Por favor ingresa un vector válido.</p>`;
        return;
    }

    const array = input.split(",").map(n => Number(n.trim()));

    const { maxSum, subvector } = kadaneAlgorithm(array);

    salida.outerHTML = `<p id="resultado26"> Subvector máximo: [ ${subvector.join(", ")} ] <br> Suma máxima: ${maxSum} </p>`;
}

//-----------------------------------------------------------------------------------------------------------------------------
// Función  de el algoritmo de Kadane
export function kadaneAlgorithm(array) {
    let maxSum = -Infinity;
    let currentSum = 0;

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    const subvector = array.slice(start, end + 1);

    return {maxSum,subvector};
}