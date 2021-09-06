document.addEventListener("DOMContentLoaded", function() {
	var formulario = document.getElementById("formulario");
	var formulario_enviado = document.getElementById("formulario-enviado")
	formulario.addEventListener("submit", function(evt) {
    //Paro el submit
	    evt.preventDefault();
	  
	  	formulario_enviado.classList.add("sent-form__checked");
	  	formulario.classList.add("the-form__checked");
	  	var json_formulario = document.getElementById("json-formulario")
	        const formData = new FormData(json_formulario)
	        console.log(formData);    
	        fetch("https://httpbin.org/post",{
	            method:'POST',
	            body:formData  
	        })
	        .then(function(response){
	            return response.json();
	            console.log(response.json);
	 
	        })
	        .catch(function(res){
	 			console.log(myJson);
	        })

		})
});
