$(function(){
	var resposta = $.ajax({
							url: 'http://localhost:8080/estados',
							method:'GET',
							dataType:'jsonp'
						});

	resposta.done(function(estados){
		estados.forEach(function(estado){
			console.log(estado);
		});
	});

	resposta.fail(function(estados){
		alert('Erro ao carregar estados do servidor!');
	});
});