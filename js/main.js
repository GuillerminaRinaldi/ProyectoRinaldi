let idioma = "espanol"
const cancion1 = "Bzrp Music Sessions, Vol 53 con Shakira"
const cancion2 = "De Musica Ligera de Soda Stereo"
const cancion3 = "Sorry de Justin Bieber"
const cancion4 = "Sweet Child'o Mine de Gun's and Roses"


const canciones = [cancion1, cancion2, cancion3, cancion4]

let avanzar = true
while(avanzar){
    let idioma = parseInt(prompt("Bienvenido!!! Ingrese 1 para musica en espanol o 2 para musica en ingles"))
    let genero = parseInt(prompt("Ingresa 1 si te gusta la musica pop o 2 si preferis rock"))
    switch(genero) {
        case 1:
            if (idioma ===1 && genero===1) {
                console.log("Quiero musica pop en espanol")
                alert("Tu cancion pop en espanol es: "+cancion1)
            } else {
                console.log("Quiero rock en ingles")
                alert("Tu cancion de rock en ingles es: "+cancion4)
            }
            break
        case 2:
            if (idioma ===2 && genero===1) {
                console.log("Quiero musica pop en ingles")
                alert("Tu cancion pop en ingles es: "+cancion3)
            } else {
                console.log("Quiero rock en espanol")
                alert("Tu cancion de rock en espanol es: "+cancion2)
            } 
            break
        default:
            console.log("No quiero participar")
            break
        }

        let confirmacion = prompt("Listo para continuar? si/no")
        if (confirmacion == "no"){
            avanzar = false
            console.log("Gracias por ingresar! Que tenga un lindo dia")
            alert("Muchas gracias por su visita!")
        } else {
            let nuevacancion = prompt("Que cancion le gustaria escuchar mas adelante?")
            canciones.push(nuevacancion)
            console.log("Me gustaria escuchar: "+nuevacancion)
        }
    }
console.log(canciones)
    





