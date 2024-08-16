document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const textInput = document.getElementById('Nombre');
   
    
    const textValue = textInput.value.trim(); 
    
    if (textValue === '') {
     
       $.notify("El espacio del nombre está vacío", "warn");
    } 
    const dateInput = document.getElementById('Fecha');
   
    
    const dateValue = dateInput.value;
    
    if (dateValue === '') {
        
        $.notify("No ha selecionado una fecha valida", "warn");
    } 
        
});
