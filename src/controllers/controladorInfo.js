//Obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))

console.log(peliculaConsultadaEnMemoria);

//asignando valores a las etiquetas que quiero controlar:
let etiquetaBanner=document.getElementById("imagenBanner")
console.log(peliculaConsultadaEnMemoria.imagen)
etiquetaBanner.src=peliculaConsultadaEnMemoria.imagen

let etiquetaImagen=document.getElementById("imagenpelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracion

let etiquetasinopsis=document.getElementById("sinopsispelicula")
etiquetasinopsis.textContent=peliculaConsultadaEnMemoria.sinopsis


/*let proximaSelecionadaEnMemoria=JSON.parse(localStorage.getItem("proxima"))
console.log(proximaSelecionadaEnMemoria);

//asignando valores a las etiquetas que quiero controlar:

let etiquetaBannerP=document.getElementById("imagenBanner")
etiquetaBanner.src=peliculaConsultadaEnMemoria.imagenP

let etiquetaImagenP=document.getElementById("imagenpelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagenP

let etiquetaTituloP=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.tituloP

let etiquetaDuracionP=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracionP

let etiquetasinopsisP=document.getElementById("sinopsispelicula")
etiquetasinopsis.textContent=peliculaConsultadaEnMemoria.sinopsisP*/