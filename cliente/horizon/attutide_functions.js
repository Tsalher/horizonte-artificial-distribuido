function setRoll(){
    var rollVal = document.getElementById("roll").value;
    var rollWid = document.getElementById("rollWidget");
    rollWid.style.transform = "rotate("+ rollVal +"deg)";
    var rollWid2 = document.getElementById("rollWidget2");
    rollWid2.style.transform = "rotate("+ rollVal +"deg)";
    
}
function setPitch(){
    var pitchVal = document.getElementById("pitch").value;
    var pitchWid = document.getElementById("pitchWidget");
    pitchWid.style.top = pitchVal;