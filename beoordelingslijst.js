function voegToe() {
  var cijfer =
  document.getElementById("input").value


  if (cijfer >= 0 && cijfer <= 49) {
    document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" onvoldoende";
  }
  else if
    (cijfer >= 50 && cijfer <= 59) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" matig";
  }
  else if
    (cijfer >= 60 && cijfer <= 74) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" goed";
  }
  else if
    (cijfer >= 75 && cijfer <= 100) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" goed";
  }


}
