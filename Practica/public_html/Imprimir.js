/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function holaCompleto() {
    irnuevoCliente();
    let hola = document.getElementById("nombre1").value;
    let contra1 = document.getElementById("Contrasenea1").value;
    
    console.log("Contraseña: " + contra1);
    console.log("Usuario: " + hola);   
}
function irnuevoUsuario(){    
    location.href = "LoginCompleto.html";
}

function nuevoUsuario(){    
    let nomb1 = document.getElementById("Nombre").value;
    let correo = document.getElementById("Correo").value;
    let contra = document.getElementById("Contrasenea").value;
    let confi = document.getElementById("Confirmar").value;
    
    console.log("Nombre: "+nomb1);
    console.log("E-Mail: "+correo);
    console.log("Contrasenea: "+contra);
    console.log("confirmar Contrasena: "+confi);
    regresarLogin();
    
}
function regresarLogin(){
    location.href = "index.html";
}
function irnuevoCliente(){
    location.href = "Ingresar.html";
}
function nuevoCliente(){
    let nomb = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cui = document.getElementById("cui").value;
    let dep = document.getElementById("depa").value;
    
    console.log("Nombre: "+nomb);
    console.log("Apellido: "+apellido);
    console.log("CUI: "+cui);
    console.log("Deparamento: "+dep);
    irnuevoCliente();
    
}
