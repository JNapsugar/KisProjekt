//#region Kor
function Kor(val,id) {
    if (id == "Kor")
        document.getElementById('KorText').value=val; 
    else
        document.getElementById('Kor').value=val; 
}
//#endregion

//#region Ágazat
let agazat = "Egészségügy"
let valasztottAg = false
let divek = document.getElementsByClassName("agazat")


for (let i = 0; i < divek.length; i++) {
    divek[i].addEventListener("click", function() {
        document.getElementById(agazat).classList.remove("valasztottAgazat")
        agazat = this.id
        document.getElementById(agazat).classList.add("valasztottAgazat")
        valasztottAg = true
    });
    
}

//#endregion

//#region Jelszó
let szem = document.getElementById("jelszoSzem")
let jelszo = document.getElementById("Jelszo")
szem.onclick = function () {
    if (jelszo.type === "password") {
        jelszo.type = "text";
        szem.src = "img/Icon/jelszoLathato.svg"
    } else {
        jelszo.type = "password";
        szem.src = "img/Icon/jelszoRejtett.svg"
    }
}


const karakterek ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
document.getElementById("generalas").addEventListener("click", function(){
    let generalt = "";
    const length = karakterek.length
    for ( let i = 0; i < 15; i++ ) {
        generalt += karakterek.charAt(Math.floor(Math.random() * length));
    }
    jelszo.value = generalt
    jelszo.disabled = true
    jelszo.type = "text";
        szem.src = "img/Icon/jelszoLathato.svg"

})

document.getElementById("sajat").addEventListener("click", function(){
    jelszo.value = ""
    jelszo.disabled = false
})
//#endregion

//#region Regisztacio
let mezok = document.getElementsByClassName("textinput")
let agazatok = document.getElementsByClassName("agazat")
document.getElementById("regisztracioBtn").addEventListener("click", function(){
    let hianyzo = false
    for (let i = 0; i < mezok.length; i++) {
        if (mezok[i].value == ""){
            mezok[i].classList.add("hibasinput")
            hianyzo = true
        }
            
        else{
            mezok[i].classList.remove("hibasinput")
        }
    }

    for (let i = 0; i < agazatok.length; i++) {
        agazatok[i].classList.remove("hibasAgazat")
    }

    if(!valasztottAg){
        for (let i = 0; i < agazatok.length; i++) {
            agazatok[i].classList.add("hibasAgazat")
        }
    }
    let nem = !document.getElementById('Nő').checked && !document.getElementById('Férfi').checked && !document.getElementById('Egyéb').checked? false : true
    if (hianyzo || !valasztottAg || !nem) {
        document.getElementById("hiba").innerText = "Minden adat kitöltése kötelező!"  
        console.log(hianyzo)
        console.log(valasztottAg)
        console.log(nem);
    }
    else{
        document.getElementById("content").innerHTML = '<h2 id="sikeres">Sikeres regisztráció</h2>'
    }

})


//#endregion 