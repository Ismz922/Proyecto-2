document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('Advertencia').style.display="none"
    document.getElementById('Advertencia2').style.display="none"
    const textInput = document.getElementById('Nombre');
   
    
    const textValue = textInput.value.trim(); 
    
    if (textValue === '') {
       document.getElementById('Advertencia').style.display="block"
    } 
    const dateInput = document.getElementById('Fecha');
   
    
    const dateValue = dateInput.value;
    
    if (dateValue === '') {
         document.getElementById('Advertencia2').style.display="block"
    } 
        
});