const socket = io(); // Conectar ao servidor

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const mensagensDiv = document.getElementById('mensagens');

    botao.addEventListener('click', () => {
        socket.emit('botaoClicado'); // Enviar evento ao servidor
    });

    socket.on('mensagem', (msg) => {
        const div = document.createElement('div');
        div.textContent = msg;
        mensagensDiv.appendChild(div);
    });
});
