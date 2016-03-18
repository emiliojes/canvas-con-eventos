var dibujo, lineas, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("area");
	lineas = dibujo.getContext("2d");

	b.addEventListener("click", dibujarGrilla)

/*
	lineas.moveTo(0,0);
	lineas.lineTo(300,0);
	lineas.lineTo(300,300);
	lineas.lineTo(0,300);
	lineas.lineTo(0,0);
	lineas.strokeStyle = "#FF00FF";
	lineas.stroke();
*/

/*
	Trazo nuevo para el circulo.
*/
/*
	lineas.beginPath();
	lineas.strokeStyle = "#FF00FF";
	Parametros de arc = 
	lineas.arc(150,150,100, (Math.PI * 2), false);
	lineas.closePath();
	lineas.stroke();
*/

	function dibujarGrilla(){
		var l = lineas;
		var cantRallas = Number(t.value);
		var ancho = 300, alto = 300;
		var raya, punto;
		var ancholinea = ancho / cantRallas;
		var limiteX = ancho / ancholinea;
		var limiteY = alto / ancholinea;
		
		for(raya = 0; raya <= limiteX; raya++)
		{
			punto = (raya * ancholinea) + 0.5;
			l.beginPath();
			l.strokeStyle = "#FF00FF";
			l.moveTo(punto, 0.5);
			l.lineTo(punto, ancho-0.5);
			l.stroke();
			l.closePath();
		}

		for(raya = 0; raya <= limiteY; raya++)
		{
			punto = (raya * ancholinea) + 0.5;
			l.beginPath();
			l.moveTo(0.5, punto);
			l.lineTo(alto - 0.5, punto);
			l.stroke();
			l.closePath();

		}

		

	}

}