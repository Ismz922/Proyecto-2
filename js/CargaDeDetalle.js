
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get("id");
  
    if (productoId) {
      
      console.log(`Detalles del libro con ID: ${productoId}`);
      const producto = productos.find((p) => p.id == productoId)
      if (producto) {
        console.log(producto)
       
        var estrellas=''
        $('#ImagenPrincipal').attr('src',producto.imagenes[0])
        $('#Imagen1').attr('src',producto.imagenes[1])
        $('#Imagen2').attr('src',producto.imagenes[2])
        $('#Imagen3').attr('src',producto.imagenes[3])
        $('#Nombre').html(producto.nombre)
        $('#Precio').html('<b>Precio: </b>$'+producto.precio)
        $('#Stock').append(producto.stock)
        $('#Descripcion').append(producto.descripcion)     
        $('#TipoEntrega').html('<b>Tipo de envio: </b>'+producto.opciones_entrega)
        $('#PrecioEnvio').append('Ya esta incluido')
        $('#TiempoEntrega').append('3-5 días hábiles')
        $('#Garantia').append(producto.garantia)
        for (let index = 0; index < producto.resena_usuarios; index++) {
          estrellas=estrellas+'★'
          
        }
        $('#Reseña').append(estrellas);
      }
    }
  });
  
  
  