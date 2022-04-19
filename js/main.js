const cartaPokemon = document.querySelector(".cartaPokemon");
const seccionCarta = document.querySelector("#seccionCarta");
const urlAPI = "https://pokeapi.co/api/v2/pokemon/";
let contadorId = 0;
let capitalizaPrimerLetra;

let traducirTipo = (cadenaTipos,i) => {
    switch (cadenaTipos[i]) {
        case "Bug":
            return cadenaTipos[i] = "Insecto";
        case "Dark":
            return cadenaTipos[i] = "Oscuro";
        case "Dragon": break;
        case "Electric":
            return cadenaTipos[i] = "Electrico";
        case "Fairy":
            return cadenaTipos[i] = "Hada";
        case "Fighting":
            return cadenaTipos[i] = "Lucha";
        case "Fire":
            return cadenaTipos[i] = "Fuego";
        case "Flying":
            return cadenaTipos[i] = "Volador";
        case "Ghost":
            return cadenaTipos[i] = "Fantasma";
        case "Grass":
            return cadenaTipos[i] = "Planta";
        case "Ground":
            return cadenaTipos[i] = "Tierra";
        case "Ice":
            return cadenaTipos[i] = "Hielo";
        case "Normal": break;
        case "Poison":
            return cadenaTipos[i] = "Veneno";
        case "Psychic":
            return cadenaTipos[i] = "Psiquico";
        case "Rock":
            return cadenaTipos[i] = "Roca";
        case "Shadow":
            return cadenaTipos[i] = "Siniestro";
        case "Steel":
            return cadenaTipos[i] = "Acero";
        case "Unknow":
            return cadenaTipos[i] = "Desconocido";
        case "Water":
            return cadenaTipos[i] = "Agua";
        default:
            break;
    }
}

const abrirBuscador = async () => {
    let { value: inputPokemon } = await Swal.fire({
        title: "Ingrese el nombre de un Pokemon",
        input: "text",
        inputLabel: "Ejemplo: Pikachu",
        confirmButtonText : "Buscar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "Debes escribir algo!";
            }
        },
        customClass: {
            title: 'tituloInformativo',
            input: 'tituloInformativo',
            inputLabel: 'tituloInformativo'
        }
    })

    let inputComparador = parseInt(inputPokemon);
    inputPokemon = inputPokemon.toLowerCase();
    let datosPokemon = await fetch(`${urlAPI}${inputPokemon}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaFinal) => respuestaFinal).catch(error => "invalido");

    const crearCartaPokemon = (spritePokemon,nombrePokemon,peso,altura,salud,ataque,defensa,ataqueEspecial,defensaEspecial,velocidad,cadenaTipos) => {
        contadorId++;
        const carta = document.createElement("article");
        carta.id = contadorId;
        seccionCarta.appendChild(carta);
        const imgPokemon = document.createElement("img");
        imgPokemon.classList.add("fotoPortada");
        imgPokemon.src = `${spritePokemon}`;
        imgPokemon.alt = `foto del frente de ${nombrePokemon}`;
        carta.innerHTML = `<i onclick="borrarCartaPokemon(${contadorId})" class="fa-solid fa-trash-can"></i>`;
        carta.appendChild(imgPokemon);
        const nombreTitulo = document.createElement("p");
        nombreTitulo.classList.add("nombrePokemon");
        nombreTitulo.id = `nombrePokemon${contadorId}`;
        carta.appendChild(nombreTitulo);
        nombreTitulo.innerHTML = nombrePokemon.toUpperCase();
        const informacion = document.createElement("section");
        informacion.classList.add("informacion");
        carta.appendChild(informacion);
        const caracteristicas = document.createElement("article");
        caracteristicas.classList.add("caracteristicas");
        informacion.appendChild(caracteristicas);
        const tituloTipos = document.createElement("p");
        tituloTipos.classList.add("tituloTipos");
        tituloTipos.innerHTML = "TIPO";
        caracteristicas.appendChild(tituloTipos);
        const infoTipos = document.createElement("article");
        infoTipos.classList.add("infoTipos");
        caracteristicas.appendChild(infoTipos);
        const iconosTipos = document.createElement("article");
        iconosTipos.classList.add("contenedorIcono");
        infoTipos.appendChild(iconosTipos);
        const nombresTipos = document.createElement("article");
        nombresTipos.classList.add("contenedorNombreTipo");
        infoTipos.appendChild(nombresTipos);
        const tituloMasInfo = document.createElement("p");
        tituloMasInfo.classList.add("tituloCaracteristicas");
        tituloMasInfo.innerHTML = "CUERPO";
        caracteristicas.appendChild(tituloMasInfo);
        const pesoYAltura = document.createElement("article");
        pesoYAltura.classList.add("masInfo");
        caracteristicas.appendChild(pesoYAltura);
        pesoYAltura.innerHTML = `<p>Peso: ${peso} kg</p><p>Altura: ${altura} m</p>`;
        const estadisticas = document.createElement("article");
        estadisticas.classList.add("estadisticas");
        informacion.appendChild(estadisticas);
        estadisticas.innerHTML = `<p class="tituloEstadisticas">ESTADISTICAS</p>`;
        const conjuntoEstadisticas = document.createElement("article");
        conjuntoEstadisticas.classList.add("conjuntoEstadisticas");
        estadisticas.appendChild(conjuntoEstadisticas);
        const nombreEstadistica = document.createElement("article");
        nombreEstadistica.classList.add("nombresEstadisticas");
        conjuntoEstadisticas.appendChild(nombreEstadistica);
        nombreEstadistica.innerHTML = `<p>Salud</p><p>Ataque</p><p>Defensa</p><p>AT Esp.</p><p>DF Esp.</p><p>Velocidad</p>`;
        const valorEstadisitica = document.createElement("article");
        valorEstadisitica.classList.add("valoresEstadisticas");
        conjuntoEstadisticas.appendChild(valorEstadisitica);
        valorEstadisitica.innerHTML = `<p>${salud}</p><p>${ataque}</p><p>${defensa}</p><p>${ataqueEspecial}</p><p>${defensaEspecial}</p><p>${velocidad}</p>`;
        
        const agregarTipos = (cadenaTipos) => {
            for (i=0; i<cadenaTipos.length; i++) {
                traducirTipo(cadenaTipos,i);
                const icono = document.createElement("img");
                icono.src = `./img/${cadenaTipos[i]}.png`;
                icono.alt = `icono que representa el tipo ${cadenaTipos[i]}`;
                icono.classList.add("iconoDeTipo");
                iconosTipos.appendChild(icono);
                const tipo = document.createElement("p");
                nombresTipos.appendChild(tipo);
                tipo.innerHTML = `${cadenaTipos[i]}`
            }
            carta.classList.add(cadenaTipos[0]);
        }

        agregarTipos(cadenaTipos);
    }

    if (datosPokemon == "invalido") {
        Swal.fire({
            icon: "error",
            title: `Oops! Parece que ${inputPokemon} no existe`,
            text: "Intenta con otro nombre",
            customClass: {
                title: 'tituloInformativo'
            }
        })
    }
    else {
        let nombrePokemon = datosPokemon.forms[0].name;
        nombrePokemon = nombrePokemon[0].toUpperCase() + nombrePokemon.slice(1);
        let spritePokemon = datosPokemon.sprites.other.home.front_default;
        let spriteAltPokemon = datosPokemon.sprites.front_default;
        let gifPokemon = datosPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
        let cantidadTipos = datosPokemon.types.length;
        let cadenaTipos = [];
        
        for (i=0; i < (cantidadTipos); i++) {
            cadenaTipos[i] = datosPokemon.types[i].type.name;
            capitalizaPrimerLetra = cadenaTipos[i];
            capitalizaPrimerLetra = capitalizaPrimerLetra[0].toUpperCase() + capitalizaPrimerLetra.slice(1);
            cadenaTipos[i] = capitalizaPrimerLetra;
        }

        let peso = datosPokemon.weight;
        peso = peso/10;
        let altura = datosPokemon.height;
        altura = altura/10;
        let salud = datosPokemon.stats[0].base_stat;
        let ataque = datosPokemon.stats[1].base_stat;
        let defensa = datosPokemon.stats[2].base_stat;
        let ataqueEspecial = datosPokemon.stats[3].base_stat;
        let defensaEspecial = datosPokemon.stats[4].base_stat;
        let velocidad = datosPokemon.stats[5].base_stat;
        let imagenAtrapastePokemon;

        if (typeof inputComparador == 'number' && !isNaN(inputComparador)) {
            if ((inputComparador >= 1) && (inputComparador < 650)) {
                imagenAtrapastePokemon = gifPokemon;
            }
            else {
                imagenAtrapastePokemon = spriteAltPokemon;
            }
        }
        else {
            imagenAtrapastePokemon = gifPokemon;
        }

        Swal.fire({
            title: "Felicidades!",
            text: `Has capturado un ${nombrePokemon}`,
            imageUrl: `${imagenAtrapastePokemon}`,
            imageHeight: 150,
            imageAlt: `Imagen de Pokemon en 8 Bits`,
            customClass: {
                title: 'tituloInformativo',
                text: 'tituloInformativo',
            }
        })

        crearCartaPokemon(spritePokemon,nombrePokemon,peso,altura,salud,ataque,defensa,ataqueEspecial,defensaEspecial,velocidad,cadenaTipos);
    }

    borrarCartaPokemon = (idCartaPokemon) => {
        const borrarPokemon = document.getElementById(`${idCartaPokemon}`);
        seccionCarta.removeChild(borrarPokemon);
    }
}

