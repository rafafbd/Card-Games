
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const PORT = 3000;

// Criar servidor com Express
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Configurar Socket.IO
const io = new Server(server);

app.use(express.static('public')); // Servir arquivos estáticos

// Evento de conexão do cliente
io.on('connection', (socket) => {
    console.log(`Novo usuário conectado: ${socket.id}`);

    // Quando o cliente envia um evento "botaoClicado"
    socket.on('botaoClicado', () => {
        console.log('Botão foi pressionado!');
        io.emit('mensagem', 'Um usuário apertou o botão!');
    });

    // Quando o usuário desconecta
    socket.on('disconnect', () => {
        console.log(`Usuário desconectado: ${socket.id}`);
    });
});
