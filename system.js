//Evento: Onclick//
function BotaoOnclick() {
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
}

//Evento: Botaodblclick//
function Botaoondblclick() {
    prompt("Evento de click duplo!")
}

//Evento: Onmouseouver//
function viraAzul() {
    let div = document.getElementById("trocaCor");
    div.style.backgroundColor = "blue";
}

//Evento: Onmouseout//
function viraBege() {
    let div = document.getElementById("trocaCor");
    div.style.backgroundColor = "blanchedalmond";
}

//Evento: Onmousemove//
function adicionaTexto() {
    let h2 = document.getElementById("texto");
    h2.append('O mouse Moveu');
}

//Evento: onmousedown//
function mouseDown() {
    alert("Evento de click quando for pressionado")
}
//Evento: onmousedown//
function mouseUp() {
    alert("Evento de click quando ele deixar de ser pressionado")
}