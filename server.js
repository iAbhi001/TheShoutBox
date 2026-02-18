const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;

wss.on('connection', (socket) => {
    userCount++;
    console.log(`User joined. Total: ${userCount}`);

    // Notify everyone about the new user count
    broadcast({ type: 'userCount', count: userCount });

    socket.on('message', (rawData) => {
        const data = JSON.parse(rawData); // We expect JSON now
        
        // Relays the message or typing status to everyone else
        broadcast(data);
    });

    socket.on('close', () => {
        userCount--;
        broadcast({ type: 'userCount', count: userCount });
    });
});

// Helper function to send JSON to everyone
function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(data));
        }
    });
}