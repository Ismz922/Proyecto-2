document.addEventListener('DOMContentLoaded', function () {
    fetch('Json/Sucursales.json')
        .then(response => response.json())
        .then(datas => {
            let canva = document.getElementById("Grafico").getContext("2d");
            var chart = new Chart(canva, {
              type: "bar",
              data: {
                labels:datas.labels,
                datasets: [
                  {
                    label: "Sucursales en el país    ",
                    backgroundColor:["#BE0A0A","#9B0ABE","#E6FB14","#19EC0F","#C4981A","#FF9311","#023CF3"],
                    
                    data:datas.data
                  }
                ]
              }
            })
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});