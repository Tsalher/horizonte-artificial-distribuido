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
}

var socket = io.connect('http://localhost:8080', { 'forceNew': true });

    socket.on('messages', function(data) {
    console.log(data);
    render(data);
    })

function render (data) {

    /*var html = data.map(function(elem, index) {
    return(`<div>
    <strong>${elem.author}</strong>:
    <em>${elem.text}</em>
    </div>`);
    }).join(" ");
    */
    document.getElementById('messages').innerHTML = data;
}