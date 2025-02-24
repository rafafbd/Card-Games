const socket = io(); // Conectar ao servidor

document.addEventListener('DOMContentLoaded', () => {
    const comecar = document.getElementById('comecar');
    const fold = document.getElementById('fold');
    const check = document.getElementById('check');
    const call = document.getElementById('call');
    const raise = document.getElementById('raise');
    const qt = document.getElementById('qtRaise');
    const mensagensDiv = document.getElementById('mensagens');

    comecar.addEventListener('click', () => {
        socket.emit('comecar'); // Enviar evento ao servidor
    });

    fold.addEventListener('click', () => {
        fold();
    });

    check.addEventListener('click', () => { 
        check();
    });

    call.addEventListener('click', () => {
        call();
    });

    raise.addEventListener('click', () => { 
        raise(qt.value);
    });

    var stack = 25000;
    var valorCall = 200;
    var folded = false;

    function call(){
        if (!folded){
            stack -= valorCall;
            socket.emit("call", valorCall);
        }
    }

    function check(){
        if (!folded && valorCall == 0){
            socket.emite("check");
        }
    }

    function raise(qt){
        if (!folded){
            if (qt > stack){
                qt = stack;
            }
            socket.emit("raise", qt);
        }
    }
    
    function fold(){
        folded = true;
        call.style.color = "red";
        fold.style.color = "red";
        raise.style.color = "red";
        check.style.color = "red"; 
    }

    function voltaJogo(){
        folded = false;
        call.style.color = "grey";
        fold.style.color = "grey";
        raise.style.color = "grey";
        check.style.color = "grey"; 
    }

    socket.on('mensagem', (msg) => {
        const div = document.createElement('div');
        div.textContent = msg;
        mensagensDiv.appendChild(div);
    });
});
