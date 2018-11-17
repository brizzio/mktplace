$(document).ready(function()
{
	
	$.getJSON('https://script.google.com/macros/s/AKfycbwfI7x2dqg4kBeKvlsv8OY-arZ5w9fK5V8RSHBpLnK8hkVtVg0x/exec?f=arvore', function(response)
	{
		var texto = "<ul>";
		var log = "";
		response.categorias.forEach(cat => {
			texto += "<li><a href='#'><img alt='' src='images/icons/thum2.png'> " + cat.descricao +  " <i class='zmdi zmdi-chevron-right'></i></a>";
			texto += "<div class='category-menu-dropdown'>";
			cat.subcategorias.forEach(sub => {
				//log += sub.index + " - " + (cat.subcategorias.length -1) + "/ ";
				texto += "<div class='category-part-1 category-common mb--30'>";
				texto +=  "<h4 class='categories-subtitle'> " + sub.descricao +  " </h4>";
				texto += "<ul>";
				if (sub.produtos.length > 0){
					sub.produtos.forEach(prod => {
				
						if(prod.index == sub.produtos.length -1){
						
							if(cat.subcategorias.length  == sub.index){
								texto += "<li><a href='#'> " + prod.descricao + " </a></li></ul></div></div> </li>";		
							}else{
								texto += "<li><a href='#'> " + prod.descricao + " </a></li></ul></div>";	
							}
						}else{
							texto += "<li><a href='#'> " + prod.descricao + " </a></li>";	
						}	
				});	
				} else {
					texto += "</ul>";
				}
				
			});
		});	
		//console.log(log);
		$("#divCategorias").append(texto);
	});
});

 