function setRoll(){
    var rollVal = document.getElementById("roll").value;
    var rollWid = document.getElementById("rollWidget");
    rollWid.style.transform = "rotate("+ rollVal +"deg)";
    var rollWid2 = document.getElementById("rollWidget2");
    rollWid2.style.transform = "rotate("+ rollVal +"deg)";
    
}
