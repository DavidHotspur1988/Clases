// HERENCIA

// function Comuna (nombre, poblacion){
//     this.nombre = nombre;
//     this.poblacion = poblacion;
// }

// Comuna.prototype.calcularCenso = function () {
//         console.log ('Calculando Censo del sector ...')
// }

// function Sector (nombre, poblacion, direccion) {
//     Comuna.call( this,nombre,poblacion )
//     this.direccion = direccion
// }

// Sector.prototype = Object.create(Comuna.prototype)

// var centro = new Sector ('Santiago', 300000, 'Rebeca Matte 2456')
// console.log (centro)

// class Vehiculo{
//     constructor (marca, color, matricula){
//         this.marca = marca;
//         this.color = color;
//         this.matricula = matricula;
//     }
// }

// class Coche extends Vehiculo {
//     constructor(marca, color, matricula, nPuertas) {
//         super(marca, color, matricula)
//         this.nPuertas = nPuertas
//     }
// }

// class Moto extends Vehiculo {
//     constructor(marca, color, matricula) {
//         super(marca, color, matricula)
//     }
// }

// class Bus extends Vehiculo {
//     constructor(marca, color, matricula) {
//         super(marca, color, matricula)
//     }
// }

// let coche1 = new Coche('Toyota', 'Negro', '123ABC')
// let moto1 = new Moto('Honda', 'Rojo', '456DEF')
// let bus1 = new Bus('Metalpar', 'Blanco', '789GHI')

// class FiguraGeometrica {
//     constructor (lado) {
//         this.lado = lado
//     }
// }

// // OBJETO CON METODOS
// class Poligono extends FiguraGeometrica {
//     constructor (lado) {
//         super (lado)
//     }
//     calcularArea () {
//         return this.lado * this.lado
//     }
// }

// let cuadrado = new Poligono(3)
// console.log(cuadrado)
// console.log(cuadrado.calcularArea()) 

// OBJETO ECMAS6 CON GET Y SET

class Animal {
    constructor (nombre) {
        this.nombre = nombre
    }
    get nombre () {
        return this._nombre
    }

    set nombre (nuevo_nombre) {
        this._nombre = nuevo_nombre
    }
}

class Herviboro extends Animal {
    constructor (nombre, tipoComida) {
        super (nombre)
        this.tipoComida = tipoComida
    }

    get tipoComida() {
        return this._tipoComida
    }

    set tipoComida (comidaNueva) {
        this._tipoComida = comidaNueva
    }
}

class Fitofago extends Herviboro {
    constructor (nombre, tipoComida, distancia) {
        super (nombre, tipoComida)
        this.distancia = distancia
    }

    get distancia() {
        return this._distancia
    }

    set distancia (nueva_distancia) {
        this._distancia = nueva_distancia
    }

    infoFitofago () {
        return  `${this.nombre} come ${this.tipoComida}, ademas se mueve ${this.distancia} kilometros a diario`
    }
}

let conejo = new Fitofago ('Pepito', 'Zanahoria', '2')
console.log (conejo.nombre)
console.log (conejo.tipoComida)
console.log (conejo.distancia)
console.log (conejo.infoFitofago())
console.log ('---')
let conejo2 = new Herviboro ('Roger', 'Lechuga')
console.log (conejo2.nombre)
console.log (conejo2.tipoComida)
conejo2.nombre = 'Pompom'
console.log (conejo2.nombre)