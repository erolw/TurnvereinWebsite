function dialogSchliessen(dialogid) {
    console.log("Test");
    document.getElementById(dialogid).classList.remove("sichtbar")
    console.log("Mal schauen")
    document.getElementById("body-overlay").classList.remove("sichtbar");
    console.log("Wird es gdfgd");
}

function dialogOeffnen(dialogid) {
    console.log("Wird es ueberhaupt ausgefuert");
    document.getElementById(dialogid).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
    console.log("Ja es wird ausgefuehrt");
}
