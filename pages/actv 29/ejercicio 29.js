export function cargarActv29() {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

    contenedor.insertAdjacentHTML("beforeend", `
        <br><br>
        <hr width="60%">
        <h3> Multiplicación de matrices con for anidados </h3>
        <hr width="60%">

        <br><br>

        <label for="matrix1Input">Ingrese la primera matriz (ej: 1,2;3,4):</label>
        <input type="text" id="matrix1Input">

        <br><br>

        <label for="matrix2Input">Ingrese la segunda matriz (ej: 5,6;7,8):</label>
        <input type="text" id="matrix2Input">

        <br><br>
        
        <button id="btnMultiplicar">Multiplicar matrices</button>

        <br><br>

        <p id="resultado29"></p>
    `);

    document.getElementById("btnMultiplicar").addEventListener("click", multiplicarMatrices);
}

//-------------------------------------------------------------------------------------------------------
// Función principal 
export function multiplicarMatrices() {
    const mat1Input = document.getElementById("matrix1Input").value.trim();
    const mat2Input = document.getElementById("matrix2Input").value.trim();
    const salida = document.getElementById("resultado29");

    if (!mat1Input || !mat2Input) {
        salida.outerHTML = `<p id="resultado29"> Ingrese ambas matrices correctamente. </p>`;
        return;
    }

    const mat1 = parseMatrix(mat1Input);
    const mat2 = parseMatrix(mat2Input);

    if (mat1[0].length !== mat2.length) {
        salida.outerHTML = `<p id="resultado29"> Número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz. </p>`;
        return;
    }

    const resultado = matrixMultiplication(mat1, mat2);
    salida.outerHTML = `<p id="resultado29">Matriz resultante:<br>${resultado.map(r => `[${r.join(", ")}]`).join("<br>")}</p>`;
}

// Función que convierte string a matriz 2D
export function parseMatrix(str) {
    return str.split(";").map(row => row.split(",").map(Number));
}

// Función que realiza la multiplicación de matrices
export function matrixMultiplication(mat1, mat2) {
    const filas1 = mat1.length;
    const cols1 = mat1[0].length;
    const cols2 = mat2[0].length;

    const resultado = Array.from({ length: filas1 }, () => Array(cols2).fill(0));

    for (let i = 0; i < filas1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                resultado[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    return resultado;
}