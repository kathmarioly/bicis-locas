function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	
	
	/*validacion de campos*/
	if (nombre == "" || nombre.length === 0 || nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){
		var inputNombre = document.getElementsByClassName("input-box")[0];
		var spanNombre = document.createElement("span");
		var textoNombre = document.createTextNode("¡Nombre NO valido!");
		spanNombre.appendChild(textoNombre);
		inputNombre.appendChild(spanNombre);
	}
	
}



