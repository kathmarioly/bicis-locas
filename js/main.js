function validateForm(){
	/* Escribe tú código aquí */

var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var correo = document.getElementById("input-email").value;
var contrasena = document.getElementById("input-password").value;
var abc = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z";

if (nombre != abc || nombre.length == 4) {
var span = document.createElement("span");
var contenedor = document.getElementById("name");
father = contenedor.parentNode;
father.appendChild(span);
var texto = document.createTextNode("Enter your name");
span.appendChild(texto)



}

if (lastname == "" || lastname.length == 0 ){
        var span = document.createElement("span");
        var contenedor = document.getElementById("lastname");
        var contenedor = contenedor.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
   
}

}






