
var db = null;

$(function(){
    
    $("#btntomarfoto").click(function(){        
    });
    
    db = openDatabase("BDCARTERA","1.0","CARTERA DE CLIENTES",200000); //DEFAULT_SIZE
    
    if(!db){
        alert("No fue posible realizar la conexión a la base de datos");        
    }else{
        db.transaction(function(tx){
            
            tx.executeSql("drop table cliente",[],
                function(tx,results){console.log("Tabla eliminada!!!")},
                function(tx,error){console.log("No se pudo eliminar la tabla")}
            );
      
            tx.executeSql("create table if not exists cliente(id integer not null primary key autoincrement,\n\
            nombre text, sexo text, correo text)");         
        },errordb,exitodb);  
    }   
     
    $("#btninsertar").click(function(){
        
        db.transaction(function(tx){            
           tx.executeSql("insert into cliente(nombre, sexo, correo) values('marx', 'm', 'm@gmail.com')"); //,['marx']            
        },errordb,exitodb);        
        
    });
    
    $("#btnleer").click(function(){
        
        db.transaction(function(tx){            
           tx.executeSql("select * from cliente",[],function(tx,rs){
              
              for(var i=0; i<rs.rows.length;i++){
                    var p = rs.rows.item(i);
                    window.alert("Datos #: " + i + " - " + p.nombre + " - " + p.sexo + " - " + p.correo);
              }
                
           });            
        },errordb,exitodb);        
        
    });
     
})

function errordb(){
        window.alert("error de bd");
    }
    
function exitodb(){
        window.alert("éxito de bd");
    } 
    
