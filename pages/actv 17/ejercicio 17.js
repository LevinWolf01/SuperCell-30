export function cargarActv17() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Eliminar duplicados de un vector usando ciclos anidados ('for') </h3>
        <hr width="60%">

        <br><br>

        <label for="duplicatesInput"> Ingrese los valores separados por coma: </label>
        <input type="text" id="duplicatesInput">

        <button id="procesarDuplicados"> Procesar Vector </button>

        <br><br>

        <p id="resultado17"></p>
    `);

    document.getElementById("procesarDuplicados").addEventListener('click', procesarDuplicados);
}
//-----------------------------------------------------------------------------------------------------------------------
// Función principal 
function procesarDuplicados() {
    const input = document.getElementById("duplicatesInput").value;
    const elementos = input.split(",").map(item => item.trim());


    const sinDuplicados = removeDuplicates(elementos);
    document.getElementById("resultado17").textContent =("Resultado sin duplicados: " + formatearArray(sinDuplicados));
}

//-----------------------------------------------------------------------------------------------------------------------
// Funcion para eliminar Duplicados
export function removeDuplicates(array) {
    const result = [];

    // Ciclos anidados para revisar duplicados
    for (let i = 0; i < array.length; i++) {
        let duplicado = false;

        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                duplicado = true;
                break;
            }
        }

        if (!duplicado) {
            result.push(array[i]);
        }
    }

    return result;
}

//-------------------------------------------------------------------------------------------------------------------
// Función formateadora
export function formatearArray(array) {
    return "▶ " + array.join(", ") + " ◀";
}

//---------------------------------------------------------------------------------------------------------------------