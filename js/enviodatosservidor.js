
$(function(){
    
    $("#btnservidor").click(function(){
        
        var nombre = $("#txtnombre").val();
        var sexo = $("#txtsexo").val();
        var correo = $("#txtcorreo").val();
        
        var parametros = {"nombre":nombre, "sexo":sexo, "correo":correo};
        
        $.ajax({
            
            async :true,
            type: "post",
            url: "https://iestp4dejunio.edu.pe/webremotomovil/enviodatosservidor_remoto.php",
            //enviodatosservidor.php
            data: parametros,
            cache: false,
            dataType: "text",
            success: function(respuesta){
                
                alert(respuesta);
                
            },
            error: function(){
                
                alert("error al obtener los datos...");
            }
                           
        })        
        
    })
        
})