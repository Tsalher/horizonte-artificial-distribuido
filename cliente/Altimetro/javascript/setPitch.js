function setPitch(){
    var pitchVal = document.getElementById("pitch").value;
    var pitchWid = document.getElementById("pitchWidget");
    
    //Este termino adicional sirve para que marque los grados del pitch correctamente en la imagen
    //Primero calculamos las dimensiones que tiene el horizonte artificial
    //foto=new Image();
    //foto.src="./horizon/img/horizon_back.svg";
    //document.images[0].src=foto.src;
    //ancho=foto.width;
    //alto=foto.height;
    //utilizamos las dimensiones del horizonte para mover el pitch
    //pitchWid.style.top = pitchVal*1500/alto;
    pitchWid.top = pitchVal;
}