class Coche{

    constructor(modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    frenar(){
        this.velocidad -= 1;
    }

}

class Autobus extends Coche{

    constructor(modelo,velocidad,antiguedad,plazas){
        super(modelo,velocidad,antiguedad);
        this.plazas = plazas;
    }

    mostrarPlazas(){
        return "La altura del bus es de " + this.plazas + " plazas";
    }
}
const autobus1 = new Autobus("Renault",100,10,50);
console.log(autobus1)

// Crear un objeto de tipo coche
let coche1 = new Coche("Tesla",150,2022);
let coche2 = new Coche("Audi",200,2021);
let coche3 = new Coche("Mercedes",150,2020);

// Crear un objeto de tipo Autobus

document.write("<h1>Velocidad Inicial: "+ coche1.velocidad+"</h1>");
console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1);

document.write("<h1>Velocidad Final: "+ coche1.velocidad+"</h1>");


