alert("¡Bienvenido a Nature Store!")
let crearUsuario = confirm("¿Desea crear una cuenta?")



function regitroUsuario(){
    if(crearUsuario){
        let nombre = prompt("Ingrese su nombre completo").toLowerCase().trim() 
        while( nombre === null || nombre === ""){
            alert("No ingresaste un nombre, intenta de nuevo")
            nombre = prompt("Ingrese su nombre completo").toLowerCase().trim() } 
        let usuario = prompt("Ingrese un nombre de usuario").toLowerCase().trim() 
        while( usuario === null || usuario === ""){
            alert("No ingresaste un usuario, intenta de nuevo")
            usuario = prompt("Ingrese un nombre de usuario").toLowerCase().trim()   }
        let contraseña = prompt( "Ingrese una contraseña").toLowerCase().trim() 
        while( contraseña === null || contraseña === ""){
            alert("No ingresaste una contraseña, intenta de nuevo")
            contraseña = prompt( "Ingrese una contraseña").toLowerCase().trim()   }
        alert( "¡Bienvenido"+ " " + usuario + " "  + "a Nature Store!. Aquí encontraras la tienda con mas variedad de productos naturales y saludables" )
    }else{
        alert("Okey, gracias por su visita")
       
    } 
}

regitroUsuario() 





let productosDestacados = [
     panes = { alimento: "pan", tipo: "Pan de salvado", marca : "Be-Green", valor : 10 + "USD", stock : 35 + " " +  "en stock"},
     cereales = { alimento: "cereal", tipo: "Granola sin tacc ", marca : "Herbalife", valor : 5 + "USD", stock : 20 + " " + "en stock"},
     proteinas = { alimento: "proteina", tipo: "Fit protein", marca : "iHERB", valor : 30 + "USD", stock : 40 + " " + "en stock"}
]



alert("Esta semana tenemos en oferta las proteinas, los panes y los cereales" )

function filtradoDeProductos(){
    let busqueda = prompt("¿Qué te interesaria comprar?").toLowerCase().trim()
    let filtrado = productosDestacados.filter((x)=> x.alimento.toLowerCase().includes(busqueda) )
    if(filtrado.length > 0){
      console.table(filtrado)
    }else{ alert("Disculpe, en estos momentod no tenemos " + " " + busqueda +  " " + "en stock") }}

filtradoDeProductos()

console.log("perdon... estos son nuestros precios viejos, dejame que te enseñe nuestras precios rebajados y los productos en stock")
let preciosRebajados = productosDestacados.map(  (x) => { 
  return{ tipo: x.tipo, valor: x.valor/0.2 }} )
 console.table(preciosRebajados)





