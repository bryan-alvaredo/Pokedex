const pokedexSuperior = document.getElementById("pokeSuperior");
const pokedexInferior = document.getElementById("pokeInferior");
const pokedexPantalla = document.getElementById("pantalla");
const botonPokedex = document.getElementById("boton");
const contenidoPantalla = document.getElementById("infoPantalla");
const textoClicAqui = document.getElementById("textoPantalla");

botonPokedex.onclick = function() {
    pokedexSuperior.style.bottom = 0;
    pokedexInferior.style.bottom = `-19.3rem`;
    pokedexPantalla.style.top = `4rem`;
    pokedexPantalla.style.height = `27rem`;
    botonPokedex.style.display = `none`;
    contenidoPantalla.style.opacity = `100%`;
    contenidoPantalla.style.display = `flex`;
    textoClicAqui.style.opacity = `100%`;
}