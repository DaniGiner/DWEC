var p = new Surtido(productos);
var u = new Usuario(productos);
var fullProd = productos;
p.dibujarSurtido(fullProd);
u.eliminarCompra();

function recarga() {

}

function verPorPrecioMas(p){
  p.ordenPrecioMas(u);
  p.dibujarSurtido();
}
function verPorPrecioMenos(p){
  p.ordenPrecioMenos(u);
  p.dibujarSurtido();
}
function verVegano(){

  p.dibujarSurtido();
}
function recarga(){
  window.location.reload(true);
}
function condCompraOnline(){
  v = window.open("", "Ventanita", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
function navegarCarrito(){

  p.dibujarSurtido();
}
