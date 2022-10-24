function validar_enviar(){
    if (document.formularioValidado.nombre.value.length==0){
        alert("Falta escribir tu nombre")
        document.formularioValidado.nombre.focus()
        return 0;
    }
    if (document.formularioValidado.apellido.value.length==0){
        alert("Falta escribir tu apellido")
        document.formularioValidado.apellido.focus()
        return 0;
    }
    if (document.formularioValidado.dirCorreo.value.length==0){
        alert("Falta escribir tu mail")
        document.formularioValidado.dirCorreo.focus()
        return 0;
    }
    if (document.formularioValidado.Consulta.selectedIndex==0){
        alert("Seleccioná el motivo de tu consulta")
        document.formularioValidado.Consulta.focus()
        return 0;
    }
    alert ("Muchas gracias por su consulta");
    document.formularioValidado.submit();
}
