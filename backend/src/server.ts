import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { connectDB } from './config/database.js';
import adminRoutes from './routes/adminRoutes.js';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
app.use('/api/admin', adminRoutes);

connectDB();

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('join_room', ({ roomId, nickname }) => {
        socket.join(roomId);
        console.log(`${nickname} se unió a la sala ${roomId}`);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Servidor en puerto ${PORT}`);
});