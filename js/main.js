let edad1 = 6
let edad2 = 18
let edad3 = 25
let idioma1 = "espanol"
let idioma2 = "otro"

let avanzar = true
while(avanzar){
    let edad = parseInt(prompt("Bienvenido!!! Ingrese su rango etario: 1 para menor o igual a 6, 2 si tenes entre 7 y 18 inclusive, 3 si sos mayor de 18, otro numero para salir"))
    let idioma = prompt("Ingresa 'espanol' si te gusta la musica en espanol u 'otro' si preferis musica en otro idioma")
    switch(info) {
        case 1:
            let idioma = "espanol" || idioma = "otro"
            if (edad <=6 && idioma == espanol) {
                console.log("Tengo 6 o menos y quiero musica en espanol")
            } else {
                console.log("Tengo 6 o menos y quiero musica en otro idioma")
            } 
            break
        case 2:
            if (edad >=7 && edad<=18) && (idioma == espanol){
                console.log("Tengo entre 7 y 18 y quiero musica en espanol")
            } else {
                console.log("Tengo entre 7 y 18 y quiero musica en otro idioma")
            } 
            break
        case 3:
            if (edad >18 && idioma == espanol) {
                console.log("Tengo mas de 18 y quiero musica en espanol")
            } else {
                console.log("Tengo mas de 18 y quiero musica en otro idioma")
            } 
            break
        default:
            console.log("No quiero participar")
            break
        }

        let confirmacion = prompt("Listo para continuar? si/no")
        if (confirmacion == "no"){
            avanzar = true
            console.log("Gracias por ingresar! Que tenga un lindo dia")
        }
    }





