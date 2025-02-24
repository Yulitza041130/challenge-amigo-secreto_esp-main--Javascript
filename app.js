// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// esta variable es un array que contendrá los nombres de los amigos ingresados por el usuario.     
let amigos = [];

// Esta variable es un set que contendrá los amigos que ya fueron sorteados. Se utiliza un set para evitar duplicados.
let amigosSorteados = new Set();

// Esta variable controla si ya se inició el sorteo (funcionalidad extra)
let sorteoIniciado = false; 

function agregarAmigo() {
    
    //Esta condición es un extra de lo solicitado en el challenge, con el fin de que no se puedan agregar mas amigos una vez iniciado el sorteo.

    if (sorteoIniciado) {
        alert("No puedes agregar más nombres después de iniciar el sorteo.");
        return;
    }

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

// condición para validar que el nombre ingresado sea válido 
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
//condición para validar que el nombre ingresado no se repita en la lista de amigos.
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
// una vez validado el nombre, se agrega a la lista de amigos y se actualiza la lista en pantalla.
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}
// Esta función actualiza la lista de amigos en pantalla.
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
// Esta función sortea un amigo aleatorio que no haya sido sorteado previamente y lo muestra en pantalla.
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 amigos para realizar el sorteo.");
        return;
    }
// Se marca como iniciado el sorteo para evitar agregar más amigos (funcionalidad extra)
    sorteoIniciado = true; 

    // Esta condición es un extra de lo solicitado en el challenge,, en donde agregué que una vez ya sorteados los amigos, se reinicie el juego.

    if (amigosSorteados.size === amigos.length) {
        alert("Todos los amigos han sido sorteados. Reiniciando el juego...");
        reiniciarJuego();
        return;
    }
// Se sortea un amigo aleatorio que no haya sido sorteado previamente

    let amigoSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.has(amigoSorteado));

    // Se agrega el amigo sorteado al set de amigos sorteados y se muestra en pantalla

    amigosSorteados.add(amigoSorteado);
    document.getElementById("resultado").innerHTML = `<p> Tu amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
// Esta función reinicia el juego, limpiando todo para comenzar de nuevo el juego.
function reiniciarJuego() {
    amigos = [];
    amigosSorteados.clear();
    sorteoIniciado = false;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
