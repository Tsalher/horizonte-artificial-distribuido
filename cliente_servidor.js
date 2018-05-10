// No hace falta cerrar la conexión con un close ya que podemos modificar en cualquier momento, ¿no?

// ¿Con conectar una vez vale o habría que meter un websocket nuevo en cada función (lo comentado abajo)? Sí
var socket1 = new WebSocket('URL del servidor'); // La URL se pone como: "ws://www.example.com/"
socket1.onopen = () =>{
    console.log('conectado (1)');    
};

function sliderChange1(pitch_val) {
    document.getElementById('pitch').innerHTML = pitch_val;
    socket1.send("{'pitch_val :'" + pitch_val + "}"); 
}

function sliderChange2(roll_val) {
    document.getElementById('roll').innerHTML = roll_val;
    socket1.send("{'roll_val :'" + roll_val + "}"); 
}