
// Activación Tooltip Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Espera a que cargue todo el documento
$(document).ready(function() {
    //Agrega una función on-click a la id #enviarCorreo
    $("#enviarCorreo").on("click",function(){
        // Agrega un console.log() para imprimir un mensaje en la consola
        console.log("Hiciste clic en el boton enviar correo");
        //genera una alerta
        alert("El correo fue enviado correctamente");
    });
    

    // Variable para controlar el color de h2
    var h2color = "#373A3C";
    // agrega una función on-dblclick a las etiquetas h2 
    $("h2").on("dblclick", function() {
        // Agrega un console.log() para imprimir un mensaje en la consola
        console.log("Hiciste doble-clic en la etiqueta h2");
        //switch de colores
        if (h2color == "#373A3C"){
            h2color = "#ff0000"}
        else {h2color = "#373A3C"
      }      
      //cambio de color
      $(this).css("color", h2color);
    });

    //Agrega una función on-click a la clase .toggle-title
    $(".toggle-title").on("click", function() {
         // Agrega un console.log() para imprimir un mensaje en la consola
         console.log("Hiciste clic al titulo de la tarjeta");
        // Utiliza toggle() para alternar la visibilidad del .toggle-content
        $(".toggle-content").toggle();
      });
});