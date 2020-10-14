//los on escuchan informacion
var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
socket.on('disconnect', function(){
    console.log('perdimos la conexion');
});
//los emit son para enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Nicolas',
    mensaje: 'Hola mundo'
}, function( resp ){
    console.log(resp);
});
socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje);
});