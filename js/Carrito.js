const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");
const producto = productos.find((p) => p.id == productoId)
const compraBoton = document.getElementById("Agregar");
function Guardar() {
  const id=producto.id
  const nombre=producto.nombre
  const precio=producto.precio
  const imagenes=producto.imagenes
  const stock=producto.stock

    const enviar = {
    id,
    nombre,
    precio,
imagenes,
stock
    };
    saveContactLocalStorage(enviar);
    $.notify("Se ha añadido el producto al carrito", "success");
  };
  const saveContactLocalStorage = (enviar) => {
   
    var envios = new Array()
	if (localStorage.getItem('envios')) {
		envios = JSON.parse(localStorage.getItem('envios'))
	}
	if(envios.length>0){
		let itemIndex = envios.findIndex((obj) => obj.id == enviar.id);
		
		if(itemIndex != -1){
			envios[itemIndex]=enviar
		}else{
			
			envios.push(enviar)
		}
		
	}else{
		
    envios.push(enviar)
		
	}
	
	localStorage.setItem('envios',  JSON.stringify(envios))
  

  };
