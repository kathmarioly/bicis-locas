function validateForm(){
	/* Escribe tú código aquí */

var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var correo = document.getElementById("input-email").value;
var contrasena = document.getElementById("input-password").value;
var abc = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z";

if (nombre.charAt() == abc || (nombre.length-1).toUpperCase >= 4) {
var span = document.createElement("span");
var contenedor = document.getElementById("name");
father = contenedor.parentNode;
father.appendChild(span);
var texto = document.createTextNode("Enter your name");
span.appendChild(texto)




}

}

/*

	return (nombre.charAt(nombre.length-1).toUpperCase())

}else{
	alert("ERROR: Utilizar solo letras");
}



if (nombre == "" || nombre.length == 0){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        //return span;
    }else if( nombre != letter){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe contener solo letras");
        span.appendChild(texto);

if (nombre == "" || nombre.length == 0){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        //return span;








/*


 if (condicion que debe cumplir el primer campo del formulario) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }
{   
var nombreAp=document.getElementById('nombreApellido').value;
var eMail=document.getElementById('email').value;
var Asunto=document.getElementById('asunto').value;
var Mensaje=document.getElementById('mensaje').value;
if (nombreAp.length==0) 
{
}
