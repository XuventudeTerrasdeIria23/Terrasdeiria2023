//funcion validar mail
function checkMail(cadena) {
	let expresion = /[^\w^@^\.^-]+/gi
	if (expresion.test(cadena))
		alert(cadena + " contiene caracteres extraños.")
	else {
		expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$
		if (expresion.test(cadena))
			alert(cadena + " es correcta.")
		else
			alert(cadena + " no es válida.")
	}
}
// funcion validar teléfono
function checkTelef(cadena) {
	let expresion = /[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/g;
	if (expresion.test(cadena))
		alert(cadena + "\n Correcto")
	else
		alert(cadena + "\nNúmero incorrecto.")
}
