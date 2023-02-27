let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

document.write(` 
				href: <b>${href}</b><br>
				Pathname: <b>${pathname}</b><br>
				Hostame: <b>${hostname}</b><br>
				Protocolo: <b>${protocol}</b><br><br>

					///////////////hasta aqui solucion de cofla//////////////<br><br>

				Distancia entre ventana y pantalla (L): <b>${window.screenLeft}</b><br>
				Distancia entre ventana y pantalla (TOP): <b>${window.screenTop}</b><br><br>

				Dimensiones de la pantalla del computador: <br>
				Ancho: <b>${window.screen.width}</b><br>
				Alto: <b>${window.screen.height}</b><br>


				`);

			//screen es un objeto y se pueden observar sus propiedades completas con:
			console.log(window.screen) 
