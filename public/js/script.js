$(document).on("ready", function(){
	$("#ajax_anal_boton").on("click", function(){
		$.ajax({
	        url: "ajax_test",
	        type: "post",
	        data: {},
	        success: function (response) {
	        	$('#resultado_ajax').text(response);
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	        }
	    });
	});

	//WEBSOCKETS
	console.log(process);
	var socket = io(window.location.origin + ":" + process.env.PORT);
	console.log(socket);
	console.log(window.location.origin + ":" + process.env.PORT);
	$("#socket_yay_buton").on("click", function(){
		socket.emit('prueba_socketss', 123, "hola");
	});

	socket.on('respuesta_server', function(var1){
		$('#resultado_websockets_campo').text(var1);
	});
});
