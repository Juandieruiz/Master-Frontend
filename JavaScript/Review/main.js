// Constantes
const nombre = "Juan Diego";
const altura = 185;

// Concvatenacion
let concatenacion = nombre + " " + altura;

// // Recogida de Datos
// let datos = document.getElementById("datos");
// // Mostrar datos con interpolacion
// datos.innerHTML = `
//     <h1>Enviando datos desde JavaScript</h1>
//     <h2>Mi nombre es: ${nombre}</h2>
//     <h3>Mi altura es: ${altura}</h3>
//     `;

// Condicionales
if(altura >= 185){
    datos.innerHTML += `<p>${nombre} es una persona ALTA</p>`;
}else{
    datos.innerHTML += `<p>${nombre} es una persona ENANA</p>`;
}

//  Bucle for
for(var i = 2000; i<= 2022; i++){
    datos.innerHTML += `<p>El año es: ${i}</p>`;
}

// Funciones
function muestraMiNombre(nombre, altura){
// Mostrar datos con interpolacion
let misDatos = `
    <h1>Enviando datos desde JavaScript</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
    `;

    return misDatos;
}

function imprimir(){
    // Recogida de Datos
    let datos = document.getElementById("datos");
    // Pasar datos a la funcion
    datos.innerHTML = muestraMiNombre("Pepe",150);;
}
imprimir();

const names = ["Name1", "Name2", "Name3"];
// alert(array);

names.forEach((oneName) => {
    document.write(oneName + "<br>");
});


const coche = {
    marca: "Ford",
    modelo: "Mustang",
    motor: "V8",
    anio: "2020",
    
    mostrarDatos(){
        console.log(`${this.marca} ${this.modelo} ${this.motor} ${this.anio}`);
    },
    propiedad: "valor"
};

    coche.mostrarDatos();
document.write(coche.modelo + "<br>");
console.log(coche)

// Promesas
let saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Bienvenidos a JavaScript" ;

        if (saludo) {
            resolve(saludo);
        } else {
            reject("No se pudo mostrar el saludo"); 
        }

    }, 3000);
});
        
        
saludar.then(resultado =>{
    alert(resultado);
})
.catch(err =>{
    alert(err);
})