function ej1() {
    document.getElementById("r1").innerHTML =
        formatearNombre("maIcA");
}

function ej2() {
    document.getElementById("r2").innerHTML =
        contarLetras("hola mundo");
}

function ej3() {
    document.getElementById("r3").innerHTML =
        maximo(5, 9, 3);
}

function ej4() {
    document.getElementById("r4").innerHTML =
        validarPassword("abc12345");
}

function ej5() {
    document.getElementById("r5").innerHTML =
        sumarArray([1, 2, 3, 4]);
}

function ej6() {
    document.getElementById("r6").innerHTML =
        mayorNumero([3, 7, 2, 10]);
}

function ej7() {
    document.getElementById("r7").innerHTML =
        obtenerPares([1, 2, 3, 4, 5, 6]);
}
let usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
}
function ej8() {

    document.getElementById("r8").innerHTML =
        descripcionUsuario(usuario);
}

function ej9() {
    let resultado = activarUsuario(usuario);
    document.getElementById("r9").innerHTML =
        resultado.activo;
}

function ej10() {

    const productos = [

        { nombre: "Mouse", precio: 10 },

        { nombre: "Teclado", precio: 25 },

        { nombre: "Monitor", precio: 200 }

    ]

    document.getElementById("r10").innerHTML =
        precioTotal(productos);
}
const usuarios = [

    { nombre: "Ana", edad: 17 },

    { nombre: "Juan", edad: 25 },

    { nombre: "Pedro", edad: 30 }

]
function ej11() {
    document.getElementById("r11").innerHTML =
        soloNombres(usuarios);
}

function ej12() {

    let lista = soloMayores(usuarios);

    let texto = "";

    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i].nombre + " - " + lista[i].edad + "<br>";
    }

    document.getElementById("r12").innerHTML = texto;
}

function ej13() {
    document.getElementById("r13").innerHTML =
        sumarEdades(usuarios);
}
const producto = {

    nombre: "Notebook",

    precio: 1000

}
function ej14() {
    document.getElementById("r14").innerHTML =
        desestructurar(producto);
}
function ej15() {

    let copia = copiaProducto(producto);

    document.getElementById("r15").innerHTML =
        copia.nombre + " - " + copia.precio + " - stock: " + copia.stock;

}
let productos = [
    { nombre: "Mouse", precio: 40 },
    { nombre: "Monitor", precio: 200 }
];
function ej16() {

    let prod = buscarProducto(productos, "Monitor");

    if (prod == null) {
        document.getElementById("r16").innerHTML = "No encontrado";
    }
    else {
        document.getElementById("r16").innerHTML =
            prod.nombre + " - " + prod.precio;
    }

}

function ej17() {

    let lista = productosCaros(productos);

    let texto = "";

    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i].nombre + " - " + lista[i].precio + "<br>";
    }

    document.getElementById("r17").innerHTML = texto;

}

function ej18() {
    document.getElementById("r18").innerHTML =
        promedio([10, 20, 30]);
}

//Desafio
function ej19() {
    let lista = obtenerUsuarios();
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i].id + " - " + lista[i].nombre + " - " + lista[i].edad + "<br>";
    }
    document.getElementById("r19").innerHTML = texto;
}

function ej20() {
    let usuario = obtenerUsuarioPorId(2);
    if (usuario == null) {
        document.getElementById("r20").innerHTML = "No encontrado";
    }
    else {
        document.getElementById("r20").innerHTML =
            usuario.id + " - " + usuario.nombre + " - " + usuario.edad;
    }
}

function ej21() {
    let lista = obtenerMayores();
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i].nombre + " - " + lista[i].edad + "<br>";
    }
    document.getElementById("r21").innerHTML = texto;
}

function ej22() {
    let nuevo = crearUsuario("Luis", 22);
    document.getElementById("r22").innerHTML = "Usuario creado: " + nuevo.nombre + " - " + nuevo.edad;
}