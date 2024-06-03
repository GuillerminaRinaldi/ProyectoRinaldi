let idioma = "espanol"
const cancion1 = "La Primavera Llego de El Reino Infantil"
const cancion2 = "Old Mc Donald had a Farm de Super Simple Songs"
const cancion3 = "Bzrp Music Sessions, Vol 53 con Shakira"
const cancion4 = "Sorry de Justin Bieber"
const cancion5 = "Crimen de Gustavo Cerati"
const cancion6 = "Karma Chameleon de Boy George"

let avanzar = true
while(avanzar){
    let edad = parseInt(prompt("Bienvenido!!! Ingrese su edad"))
    let idioma = parseIntprompt("Ingresa 'espanol' si te gusta la musica en espanol u 'otro' si preferis musica en otro idioma")
    switch(idioma) {
        case 1:
            let idioma = "espanol"
            if (edad <= 6 && idioma == espanol) {
                console.log("Tengo 6 o menos y quiero musica en espanol")
                alert("Tu cancion es: "+cancion1)
            } else {
                console.log("Tengo 6 o menos y quiero musica en otro idioma")
                alert("Tu cancion es: "+cancion2)
            } 
            break
        case 2:
            if ((edad >= 7 && edad<= 18) && (idioma == espanol)){
                console.log("Tengo entre 7 y 18 y quiero musica en espanol")
                alert("Tu cancion es: "+cancion3)
            } else {
                console.log("Tengo entre 7 y 18 y quiero musica en otro idioma")
                alert("Tu cancion es: "+cancion4)
            } 
            break
        case 3:
            if (edad > 18 && idioma == espanol) {
                console.log("Tengo mas de 18 y quiero musica en espanol")
                alert("Tu cancion es: "+cancion5)
            } else {
                console.log("Tengo mas de 18 y quiero musica en otro idioma")
                alert("Tu cancion es: "+cancion6)
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
        }
    }

    const canciones = [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6]
    canciones.push("La Vaca Lola de La Granja de Zenon")




