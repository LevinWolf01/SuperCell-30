export function cargarActv25() {
    const contenedor = document.getElementById("resultados");

    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Rotar Vector, 'K' posiciones con 'for' </h3>
        <hr width="60%">
        <br><br>

        <label for="rotateInput"> Vector (ej: 1,2,3,4,5): </label>
        <input id="rotateInput" type="text">

        <br><br><br>

        <label for="positionsInput"> Posiciones a rotar (k): </label>
        <input id="positionsInput" type="number">

        <button id="btnRotar"> Rotar </button>

        <br><br>

        <p id="resultado25"></p>
    `);

    document.getElementById("btnRotar").addEventListener("click", rotarVector);
}

//----------------------------------------------------------------------------------------------------------------------------
// Función Principal
export function rotarVector() {
    const vectorTexto = document.getElementById("rotateInput").value;
    const posiciones = Number(document.getElementById("positionsInput").value);
    const salida = document.getElementById("resultado25");

    if (!vectorTexto.trim()) {
        salida.innerText = "Por favor ingresa un vector válido.";
        return;
    }

    const array = vectorTexto.split(",").map(n => Number(n.trim()));
    const resultado = rotateArray(array, posiciones);
    salida.innerText = `Vector rotado: [ ${resultado.join(", ")} ]`;
}

//-----------------------------------------------------------------------------------------------------------------------------
// Función para rotar el vector 'k' posiciones 
export function rotateArray(array, positions) {
    const n = array.length;
    const k = positions % n; // evitar rotaciones innecesarias

    const result = [];

    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        result[newIndex] = array[i];
    }

    return result;
}