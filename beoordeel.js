function bereken(cijfer){
    var beoordeling;
    if (cijfer >= 0 && cijfer <= 49) {
        beoordeling = " onvoldoende";
    }
    else if (cijfer >= 50 && cijfer <= 59) {
        beoordeling = " matig"
    }
    else if (cijfer >= 60 && cijfer <= 74) {
        beoordeling = " voldoende";
    }
    else if (cijfer >= 75 && cijfer <= 100) {
        beoordeling = " goed";
    }
    return beoordeling;
}
function voegToe() {
    var cijfer = document.getElementById("input").value
    document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+ bereken(cijfer) +"<br>";
}
function volledigeCijfer() {
    var cijfer = document.getElementById("input1").value;
    document.getElementById('resultaat').innerHTML +="De beoordeling is" + bereken(cijfer) + " , want het cijfer is "+cijfer+".  <br>";
}
