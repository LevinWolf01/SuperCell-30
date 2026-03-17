    export function cargarActv20() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Contar vocales en un vector de letras usando 'for' </h3>
        <hr width="60%">

        <br><br>

        <label for="lettersInput"> Ingrese letras separadas por comas: </label>
        <input type="text" id="lettersInput">

        <button id="btnContarVocales"> Contar Vocales </button>

        <br><br>

        <p id="resultado20"></p>
    `);

    document.getElementById("btnContarVocales").addEventListener("click", contarVocales);
}
//-----------------------------------------------------------------------------------------------------------------
//Con esta funcion, cuento las vocales del Array de letras
export function countVowels(letters) {
    const vocales = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        if (vocales.includes(letters[i].toLowerCase())) {
            count++;

        //includes()    = comprueba si un array incluye un elemento determinado, devolviendo falso o verdaderp
        //toLowerCase() = convierte el texto en minúsculas.
        }
    }

    return count;
}

//-----------------------------------------------------------------------------------------------------------------
// Función del contador
export function updateCounter(count) {
    document.getElementById("resultado20").innerText =
        "Cantidad de vocales: " + count;
}

//-----------------------------------------------------------------------------------------------------------------
// Función principal:
export function contarVocales() {
    const input = document.getElementById("lettersInput").value;

    if (!input) {
        document.getElementById("resultado20").innerText =("Por favor ingrese letras.");
        return;
    }

    const lettersArray = input.split(",").map(letter => letter.trim());

    const cantidadVocales = countVowels(lettersArray);

    updateCounter(cantidadVocales);
}
