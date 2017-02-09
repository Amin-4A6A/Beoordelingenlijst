function voegToe() {
  var cijfer = document.getElementById("input").value
  if (cijfer >= 0 && cijfer <= 49) {
    document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" onvoldoende <br>";
  } else if (cijfer >= 50 && cijfer <= 59) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" matig <br>";
  } else if (cijfer >= 60 && cijfer <= 74) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" voldoende <br>";
  } else if (cijfer >= 75 && cijfer <= 100) {
        document.getElementById('resultaat').innerHTML +="het cijfer is "+cijfer+" goed <br>";
  }


}
function volledigeCijfer() {
  var cijfer1 = document.getElementById("input1").value;
  if (cijfer1 >= 0 && cijfer1 <= 49) {
    document.getElementById('resultaat').innerHTML +="De beoordeling is onvoldoende, want het cijfer is "+cijfer1+".  <br>";
  } else if (cijfer1 >= 50 && cijfer1 <= 59) {
        document.getElementById('resultaat').innerHTML +="De beoordeling is matig, want het cijfer is "+cijfer1+".  <br>";
  } else if (cijfer1 >= 60 && cijfer1 <= 74) {
        document.getElementById('resultaat').innerHTML +="De beoordeling is voldoende, want het cijfer is "+cijfer1+".  <br>";
  } else if (cijfer1 >= 75 && cijfer1 <= 100) {
        document.getElementById('resultaat').innerHTML +="De beoordeling is Goed, want het cijfer is "+cijfer1+".  <br>";
  }
}
