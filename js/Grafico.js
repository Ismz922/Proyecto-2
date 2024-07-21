$(document).ready(function nose(){
    const Nombres=[];
const Sucursales=[];
for (let index = 0; index < tiendas.length; index++) {
    Nombres.add(tiendas.Tiendas[index].nombre);
    Sucursales.add(tiendas.Tiendas[index].numero);
    
};
})
let canva = document.getElementById("Grafico").getContext("2d");

var chart = new Chart(canva, {
  type: "bar",
  data: {
    labels: ["Alajuela", "San Jose", "Heredia", "Limon", "Guanacaste", "Puntarenas", "Cartago"],
    datasets: [
      {
        
        label: ["Sucursales en el país"],
        backgroundColor:["#BE0A0A","#9B0ABE","#E6FB14","#19EC0F","#C4981A","#FF9311","#023CF3"],
     
        data:[3,5,2,1,1,2,1]
       
      }
    ]
  }
})