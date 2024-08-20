document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const textInput = document.getElementById('Nombre');
   
    
    const textValue = textInput.value.trim(); 
    const correo = document.getElementById('email');
   
    
    const correoValor = correo.value.trim(); 
    
    if (textValue === '') {
     
       $.notify("El espacio del nombre está vacío", "warn");
       return;
    } 
    if (correoValor === '') {
     
        $.notify("El espacio del correo está vacío", "warn");
        return;
     } 
    const dateInput = document.getElementById('Fecha');
   
    
    const dateValue = dateInput.value;
    
    if (dateValue === '') {
        
        $.notify("No ha selecionado una fecha valida", "warn");
        return;
    } 
    const hoy = new Date();
    const fechaNac = new Date(dateValue);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    if (edad<16) {
        $.notify("Por favor pedirle a un adulto que llene el formulario ya que se detectó que el usuario es menor de edad", "warn");
        return;
    }
    $.notify("Se ha enviado el formulario correctamente", "success");
});
