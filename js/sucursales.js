const listado = document.getElementById("sucursales");
const listadoProductos= "json/sucursal.json";




fetch(listadoProductos)
.then(respuesta => respuesta.json())
.then(datos => {
  datos.forEach(producto =>
    {
      listado.innerHTML += `
      <div class="card 3" style="width: 350px; margin:20px">
      <img class="card-img-top mt-2" src="${producto.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${producto.lugar}</h5>
        <p class="card-text">${producto.calle}</p>   
    </div>
    `
    });
   
    })   
