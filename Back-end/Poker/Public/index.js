const socket = io(); // Conectar ao servidor

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const fold = document.getElementById('fold');
    const check = document.getElementById('check');
    const call = document.getElementById('call');
    const raise = document.getElementById('raise');
    const qt = document.getElementById('qtRaise');
    const mensagensDiv = document.getElementById('mensagens');

    botao.addEventListener('click', () => {
        socket.emit('botaoClicado'); // Enviar evento ao servidor
    });

    fold.addEventListener('click', () => {
        socket.emit('fold');
    });

    check.addEventListener('click', () => { 
        socket.emit('check');
    });

    call.addEventListener('click', () => {
        socket.emit('call');
    });

    raise.addEventListener('click', () => { 
        socket.emit('raise', qt.value);
    });



    socket.on('mensagem', (msg) => {
        const div = document.createElement('div');
        div.textContent = msg;
        mensagensDiv.appendChild(div);
    });
});
