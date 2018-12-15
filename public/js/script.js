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

	$("#socket_yay_buton").on("click", function(){
		io.emit('prueba_socketss', 123, "hola");
	});

	io.on('respuesta_server', function(var1){
		$('#resultado_websockets_campo').text(var1);
	});
});
