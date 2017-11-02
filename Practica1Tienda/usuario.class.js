function Usuario(productos){
  this.compra=productos;
  this.id = Math.floor((Math.random() * 1000) + 1);
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.importe = 0;
  this.eliminarCompra = function(){
    this.compra.pop();
  }
  function getSum(total, num) {
    return total + num;
  }
  this.calcularImporte = function(){
    document.getElementById("demo").innerHTML = p.reduce(getSum);
  }
  this.mostrarCompra = function(){
    var str="<div class='cuerpo'>";
    str += "<div class='contenedor'>";
    str += "<img src='" + this.Usuario[i].foto +"' alt ='";
    str += this.Usuario[i].nombre + "'>";
    str += "<p> Producto: " + this.Usuario[i].nombre + "</p>";
    str += "<p> " + this.Usuario[i].descripcion + "</p>";
    str += "<p><b> " + this.Usuario[i].precio + "</b></p>";
    str += "</div>";
    str += "</div>";
  }
}
