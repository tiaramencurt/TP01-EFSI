//PARTE 1
// Ej 1
function formatearNombre(nombre){
    let primera = nombre[0].toUpperCase();
    let resto = nombre.substring(1).toLowerCase();
    return primera + resto;
}

// Ej2
function contarLetras(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] != " "){
            contador++;
        }
    }
    return contador;
}

// Ej 3
function maximo(a,b,c){
    let mayor = a;
    if(b > mayor){
        mayor = b;
    }
    if(c > mayor){
        mayor = c;
    }
    return mayor;
}

// Ej 4
function validarPassword(password){

    if(password.length < 8){
        return false;
    }
    let tieneNumero = false;
    for(let i=0;i<password.length;i++){
        if(typeof Number(password[i]) === "number" && password[i] != " "){
            if(!isNaN(password[i])){
                tieneNumero = true;
            }
        }
    }
    return tieneNumero;
}

//PARTE 2
// Ej 5
function sumarArray(numeros){
    let suma = 0;
    for(let i=0;i<numeros.length;i++){
        suma = suma + numeros[i];
    }
    return suma;
}

// Ej 6
function mayorNumero(numeros){
    let mayor = numeros[0];
    for(let i=0;i<numeros.length;i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

// Ej 7
function obtenerPares(numeros){
    let pares = [];
    for(let i=0;i<numeros.length;i++){
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }
    }
    return pares;
}

//PARTE 3
// Ej 8
function descripcionUsuario(usuario){
    return usuario.nombre + " tiene " + usuario.edad + " años";
}

// Ej 9
function activarUsuario(usuario){
    usuario.activo = true;
    return usuario;
}

// Ej 10
function precioTotal(productos){
    let total = 0;
    for(let i=0;i<productos.length;i++){
        total = total + productos[i].precio;
    }
    return total;
}

//PARTE 4
// Ej 11
function soloNombres(usuarios){
    let nombres = [];
    for(let i=0;i<usuarios.length;i++){
        nombres.push(usuarios[i].nombre);
    }
    return nombres;
}

// Ej 12
function soloMayores(usuarios){
    let mayores = [];
    for(let i=0;i<usuarios.length;i++){
        if(usuarios[i].edad >= 18){
            mayores.push(usuarios[i]);
        }
    }
    return mayores;
}

// Ej 13
function sumarEdades(usuarios){
    let suma = 0;
    for(let i=0;i<usuarios.length;i++){
        suma = suma + usuarios[i].edad;
    }
    return suma;
}

//PARTE 5
// Ej 14
function desestructurar(producto){
    let nombre = producto.nombre;
    let precio = producto.precio;
return "El producto se llama " + nombre + " y cuesta " + precio + ".";
}

// Ej 15
function copiaProducto(producto){
    let productoNuevo = {
        nombre: producto.nombre,
        precio: producto.precio,
        stock:5
    };
    return productoNuevo;
}

//PARTE 6
// Ej 16
function buscarProducto(productos,nombre){
    for(let i=0;i<productos.length;i++){
        if(productos[i].nombre == nombre){
            return productos[i];
        }
    }
    return null;
}

// Ej 17
function productosCaros(productos){
    let caros = [];
    for(let i=0;i<productos.length;i++){
        if(productos[i].precio > 50){
            caros.push(productos[i]);
        }
    }
    return caros;
}

// Ej 18
function promedio(numeros){
    let suma = 0;
    for(let i=0;i<numeros.length;i++){
        suma = suma + numeros[i];
    }
    return suma / numeros.length;
}