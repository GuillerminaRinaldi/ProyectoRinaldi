let edad1 = 6
let edad2 = 18
let edad3 = 25
let idioma1 = "espanol"
let idioma2 = "otro"
let info = 'edad' + 'idioma'

let avanzar = true
while(avanzar){
    let edad = parseInt(prompt("Bienvenido!!! Ingrese su edad"))
    let idioma = prompt("Ingresa 'espanol' si te gusta la musica en espanol u 'otro' si preferis musica en otro idioma")
    switch(idioma) {
        case 1:
            let idioma = "espanol"  
            if (edad <= 6 && idioma == espanol) {
                console.log("Tengo 6 o menos y quiero musica en espanol")
                alert = "Tu cancion es La Primavera Llego de El Reino Infantil"
            } else {
                console.log("Tengo 6 o menos y quiero musica en otro idioma")
                alert = "Tu cancion es Old Mc Donald had a Farm de Super Simple Songs"
            } 
            break
        case 2:
            if ((edad >= 7 && edad<= 18) && (idioma == espanol)){
                console.log("Tengo entre 7 y 18 y quiero musica en espanol")
                alert = "Tu cancion es Bzrp Music Sessions, Vol 53 con Shakira"
            } else {
                console.log("Tengo entre 7 y 18 y quiero musica en otro idioma")
                alert = "Tu cancion es Sorry de Justin Bieber"
            } 
            break
        case 3:
            if (edad > 18 && idioma == espanol) {
                console.log("Tengo mas de 18 y quiero musica en espanol")
                alert = "Tu cancion es Crimen de Gustavo Cerati"
            } else {
                console.log("Tengo mas de 18 y quiero musica en otro idioma")
                alert = "Tu cancion es Karma Chameleon de Boy George"
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
        }
    }





