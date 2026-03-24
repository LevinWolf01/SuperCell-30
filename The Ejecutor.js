import * as importedOnes from "./the imported ones.js";



//----------------------------------------------------------------------------------

const ActSelected = document.getElementById("actividades");
const btnStart = document.getElementById("btnStart");
const ResultadosDiv = document.getElementById("resultados");

//----------------------------------------------------------------------------------

ResultadosDiv.innerHTML = ""; //limpia la pantalla al cambiar de Actividad.

//----------------------------------------------------------------------------------

function startActv() {
    const Act = ActSelected.value;


    switch (Act) {
        case "clear":
            ResultadosDiv.innerHTML = "<p>Por favor, selecciona una actividad.</p>";
            break;
        case "Exam":
            importedOnes.examen.generarFormulario();
            break;
        // case "Exam2":
        //     importedOnes.examenV2.generarFormulario();
        //     break;
        case "Vect":
            importedOnes.vectores.cargarPagina();
            break;
        case "Act 1":
            importedOnes.actv1.cargarActv1();
            break;
        case "Act 2":
            importedOnes.actv2.cargarActv2();
            break;
        case "Act 3":
            importedOnes.actv3.cargarActv3();
            break;
        case "Act 4":
            importedOnes.actv4.cargarActv4();
            break;
        case "Act 5":
            importedOnes.actv5.cargarActv5();
            break;
        case "Act 6":
            importedOnes.actv6.cargarActv6();
            break;
        case "Act 7":
            importedOnes.actv7.cargarActv7();
            break;
        case "Act 8":
            importedOnes.actv8.cargarActv8();
            break;
        case "Act 9":
            importedOnes.actv9.cargarActv9();
            break;
        case "Act 10":
            importedOnes.actv10.cargarActv10();
            break;
        case "Act 11":
            importedOnes.actv11.cargarActv11();
            break;
        case "Act 12":
            importedOnes.actv12.cargarActv12();
            break;
        case "Act 13":
            importedOnes.actv13.cargarActv13();
            break;
        case "Act 14":
            importedOnes.actv14.cargarActv14();
            break;
        case "Act 15":
            importedOnes.actv15.cargarActv15();
            break;
        case "Act 16":
            importedOnes.actv16.cargarActv16();
            break;
        case "Act 17":
            importedOnes.actv17.cargarActv17();
            break;
        case "Act 18":
            importedOnes.actv18.cargarActv18();
            break;
        case "Act 19":
            importedOnes.actv19.cargarActv19();
            break;
        case "Act 20":
            importedOnes.actv20.cargarActv20();
            break;
        case "Act 21":
            importedOnes.actv21.cargarActv21();
            break;
        case "Act 22":
            importedOnes.actv22.cargarActv22();
            break;
        case "Act 23":
            importedOnes.actv23.cargarActv23();
            break;
        case "Act 24":
            importedOnes.actv24.cargarActv24();
            break;
        case "Act 25":
            importedOnes.actv25.cargarActv25();
            break;
        case "Act 26":
            importedOnes.actv26.cargarActv26();
            break;
        case "Act 27":
            importedOnes.actv27.cargarActv27();
            break;
        case "Act 28":
            importedOnes.actv28.cargarActv28();
            break;
        case "Act 29":
            importedOnes.actv29.cargarActv29();
            break;
        case "Act 30":
            importedOnes.actv30.cargarActv30();
            break;


        default:
            ResultadosDiv.innerHTML = "<p>Actividad no disponible aún.</p>";
    }

}

//-----------------------------------------------------------------------------------

btnStart.addEventListener('click', startActv);

//-----------------------------------------------------------------------------------
