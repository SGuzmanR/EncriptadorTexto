let readText = document.querySelector("#writeText");
let resultText = document.querySelector("#showResult");
let btnEnc = document.querySelector("#btn-enc");
let btnDes = document.querySelector("#btn-des");
let btnCopiar = document.querySelector("#btn-copiar");


//Funcion para cambiar display del panel
function changePanel(i){
    switch(i){
        case 0: document.getElementById("on").style.display = "none";
                document.getElementById("off").style.display = "flex";
        break;
        case 1: document.getElementById("on").style.display = "flex";
                document.getElementById("off").style.display = "none";
        break;
    }
}

//Validar texto en mayusculas o caracter especiales
function textValidation(){
    let processText = readText.value;
    let validation = "áéíóúäëïöüQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚÄËÏÖÜ";

    if(processText == ""){
        changePanel(0);
        readText.focus();
    }
    for (var i of processText){
        if(validation.includes(i)){            
            readText.value = readText.value.toLowerCase()
            .replaceAll("á","a")
            .replaceAll("é","e")
            .replaceAll("í","i")
            .replaceAll("ó","o")
            .replaceAll("ú","u")
            .replaceAll("ä","a")
            .replaceAll("ë","e")
            .replaceAll("ï","i")
            .replaceAll("ö","o")
            .replaceAll("ü","u");
            readText.value = readText.value;
            break;
        }
    }
}

//Funcion para encriptar texto ingresado
function encriptar(){
    changePanel(1);
    textValidation();

    let processText = readText.value;
    let encriptar = processText
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")
    .replaceAll(" ","stdq");

    resultText.focus();
    resultText.value = encriptar;
}

//Funcion para desencriptar texto ingresado
function desencriptar(){
    changePanel(1);
    textValidation();

    let processText = readText.value;
    let desencriptar = processText
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
    .replaceAll("stdq"," ");

    resultText.focus();
    resultText.value = desencriptar;
}

//Funcion para copiar texto
function copiarTexto(){
    let copiarTexto = document.querySelector("#showResult");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    readText.value = "";
}

//Llamado de funciones
changePanel(0);
btnEnc.onclick = encriptar;
btnDes.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;