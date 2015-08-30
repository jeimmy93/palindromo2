window.onload = function()
{	

	nom_div("envio").addEventListener('click', function(event)
	{
		//console.log("hola");

		var letras = document.getElementById("palabra").value;
        //console.log(letras);
        if (letras == 0)
        {
        	alert("porfavor digite un valor");
        }
        else{  

         var Espacios = "";
         var cont = 0;
           for(var c in letras)
            {

              if(letras[c] != " ")
               {
                 Espacios += letras[c];
                 cont ++;
                 if(cont == Espacios.length)
                 {
                    console.log(Espacios);
                 }
               } 
               

            }
        var pal2 =Espacios.toLowerCase();
        var pal4 = pal2.split("");
       
  


      	for ( var a = 0 ; a < pal4.length;a++) 
		{
			
                  
			
       

			for (var b = pal4.length-1; b >= 0; b--)
			{ 
			
                
				if ( pal4[a] == pal4[b] )	
				{

                   console.log("es palindromo");
                
				
				}

				else 
				{
					
                   console.log("no es palindromo");
					
					
			
				}

				break;
			    

			}

		   		break;
		   			}	



			}
			



	});		
	//Accedera los elementos de HTML...
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}