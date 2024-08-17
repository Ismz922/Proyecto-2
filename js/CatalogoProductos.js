function DetalleProducto(id) {
    window.location.href=`Detalle-Producto.html?id=${id}`;
}
function Carrito() {
    window.location.href=`Carrito de compra.html`;
}
$(document).ready(function () {
    mostrarProductos(productos)
    

});


function mostrarProductos(data){
    $("#tienda").html('')
    data.forEach((producto) => {

        const productoAgregar = ` 
        <div class="col-sm-6 col-md-4 col-lg-3 col-12 my-2">
          <div class="card h-100">
            <img class="card-img-top" src="${producto.imagenes[0]}" alt="${producto.imagenes[0]}">
            <div class="card-body ">
              <h5 class="card-title ">${producto.nombre}</h5>
              <p class="card-text fs-4 mt-2">$${producto.precio}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary" style="width:80%;"
                onClick="DetalleProducto(${producto.id})">Detalles</button>
            </div>
          </div>
        </div>`
        $('#tienda').append(productoAgregar)
    })
}


$('#grupoBotones').on('click', 'button', function () {
    
    var filtro = $(this).attr('filtro');
    deseleccionar();
    $(this).removeClass('btn-secondary');
    $(this).addClass('btn-primary');
    console.log(filtro);
    var productosFiltrados;    
    if (filtro == 'Todos') {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(function(producto) {
            return producto.categorias.includes(filtro);
        });
    }    
    
    mostrarProductos(productosFiltrados);
});

var filtrarBotones = $('#grupoBotones').find('button');
function deseleccionar() {
    filtrarBotones.each(function () {
        
        $(this).removeClass('btn-primary');
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-secondary');
    });
}