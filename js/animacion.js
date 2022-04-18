const pokedexSuperior = document.getElementById("pokeSuperior");
const pokedexInferior = document.getElementById("pokeInferior");
const pokedexPantalla = document.getElementById("pantalla");
const botonPokedex = document.getElementById("boton");
const contenidoPantalla = document.getElementById("infoPantalla");

/// POKEDEX
botonPokedex.onclick = function() {
    //POKEDEX PARTE SUPERIOR
    pokedexSuperior.style.transitionDuration = `0.5s`;
    pokedexSuperior.style.transitionDelay = `0s`;
    pokedexSuperior.style.bottom = `-1.05rem`;
    //POKEDEX PARTE INFERIOR
    pokedexInferior.style.transitionDuration = `0.5s`;
    pokedexInferior.style.transitionDelay = `0s`;
    pokedexInferior.style.bottom = `-13.6rem`;
    //PANTALLA POKEDEX
    pokedexPantalla.style.transitionDuration = `0.5s, 0.5s`;
    pokedexPantalla.style.transitionDelay = `0s, 0s`;
    pokedexPantalla.style.top = `-5.7rem`;
    pokedexPantalla.style.height = `16.6rem`;
    //BOTON POKEDEX
    botonPokedex.style.zIndex = `-4`;
    botonPokedex.style.transitionDuration = `0s`;
    botonPokedex.style.transitionDelay = `0s`;
    //TEXTO EN PANTALLA
    contenidoPantalla.style.transitionDuration = `1s, 1s`;
    contenidoPantalla.style.transitionDelay = `0s, 0.5s`;
    contenidoPantalla.style.zIndex = `1`;
    contenidoPantalla.style.opacity = `100%`;
}

const cerrarPokedex = () => {
    //TEXTO EN PANTALLA
    contenidoPantalla.style.transitionDuration = `1s, 1s`;
    contenidoPantalla.style.transitionDelay = `0.5s, 0.0s`;
    contenidoPantalla.style.zIndex = `-3`;
    contenidoPantalla.style.opacity = `0%`;
    //POKEDEX PARTE SUPERIOR
    pokedexSuperior.style.transitionDuration = `0.5s`;
    pokedexSuperior.style.transitionDelay = `1s`;
    pokedexSuperior.style.bottom = `-7.6rem`;
    //POKEDEX PARTE INFERIOR
    pokedexInferior.style.transitionDuration = `0.5s`;
    pokedexInferior.style.transitionDelay = `1s`;
    pokedexInferior.style.bottom = `-7.6rem`;
    //PANTALLA POKEDEX
    pokedexPantalla.style.transitionDuration = `0.5s, 0.5s`;
    pokedexPantalla.style.transitionDelay = `1s, 1s`;
    pokedexPantalla.style.top = `-1.65rem`;
    pokedexPantalla.style.height = `9.1rem`;
    //BOTON POKEDEX
    botonPokedex.style.zIndex = `2`;
    botonPokedex.style.transitionDelay = `1.5s`;
}

/// MODO OSCURO
