alert("¡Bienvenido a Luxury Store!")
let crearUsuario = confirm("¿Desea crear una cuenta?")



function regitroUsuario(){
    if(crearUsuario){
        let nombre = prompt("Ingrese su nombre completo")
        while( nombre === null || nombre === ""){
            alert("No ingresaste un nombre, intenta de nuevo")
            nombre = prompt("Ingrese su nombre completo")} 
        let usuario = prompt("Ingrese un nombre de usuario")
        while( usuario === null || usuario === ""){
            alert("No ingresaste un usuario, intenta de nuevo")
            usuario = prompt("Ingrese un nombre de usuario")  }
        let contraseña = prompt( "Ingrese una contraseña")
        while( contraseña === null || contraseña === ""){
            alert("No ingresaste una contraseña, intenta de nuevo")
            contraseña = prompt( "Ingrese una contraseña")  }
        alert( "¡Bienvenido"+ " " + usuario + " "  + "a Luxury Store!. Aquí encontraras la red de ventas online mas exclusiva del mundo" )
    }else{
        alert("Okey, gracias por su visita")
    }
   
}


regitroUsuario() 


   




