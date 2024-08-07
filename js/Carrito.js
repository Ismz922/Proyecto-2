const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");
const producto = productos.find((p) => p.id == productoId)
const compraBoton = document.getElementById("Agregar");
function Guardar() {
  const id=producto.id
  const nombre=producto.nombre
  const precio=producto.precio
  const imagenes=producto.imagenes

    const enviar = {
    id,
    nombre,
    precio,
imagenes
    };
    
    saveContactLocalStorage(enviar);
  };
  const saveContactLocalStorage = (enviar) => {
    let envios = JSON.parse(localStorage.getItem("envios")) || [];
    envios.push(enviar);
    localStorage.setItem("envios", JSON.stringify(envios));

  };