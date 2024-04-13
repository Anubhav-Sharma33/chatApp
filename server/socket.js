import { Server } from "socket.io";

const ConnectedUser = {};

function initializeSocket(server){
    const io = new Server(httpServer);

    io.on('connection', (socket) => {
        console.log('A client connected');
    
        socket.on('message', (data) => {
          console.log('Message received:', data);
          io.emit('message', data);
        });
    
        socket.on('disconnect', () => {
          console.log('A client disconnected');
        });
    });
}

export default initializeSocket;
