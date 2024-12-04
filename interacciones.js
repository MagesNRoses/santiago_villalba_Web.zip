let leerMás_btn1 = document.getElementById ("botón-leer-más1");

let ocultarTexto1 = document.getElementById ("texto-ocultar1");

let leerMás_btn2 = document.getElementById ("botón-leer-más2");

let ocultarTexto2 = document.getElementById ("texto-ocultar2");

leerMás_btn1.addEventListener ("click", toggleText1);

function toggleText1() {
    ocultarTexto1.classList.toggle("mostrar1")

    if(ocultarTexto1.classList.contains("mostrar1")) {
        leerMás_btn1.innerHTML = "Leer menos";
    }
    else {
        leerMás_btn1.innerHTML = "Leer más";
    }
}

leerMás_btn2.addEventListener ("click", toggleText2);

function toggleText2() {
    ocultarTexto2.classList.toggle("mostrar2")

    if(ocultarTexto2.classList.contains("mostrar2")) {
        leerMás_btn2.innerHTML = "Leer menos";
    }
    else {
        leerMás_btn2.innerHTML = "Leer más";
    }
}

