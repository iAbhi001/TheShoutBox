const { WebSocketServer } = require('ws');

// Create a server listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket server is running on ws://localhost:8080");

wss.on('connection', (socket) => {
    console.log("New client connected!");

    // Listen for messages from a client
    socket.on('message', (data) => {
        console.log(`Received: ${data}`);

        // Broadcast the message to EVERY connected client
        wss.clients.forEach((client) => {
            if (client.readyState === 1) { // Check if the connection is open
                client.send(data.toString());
            }
        });
    });

    socket.on('close', () => console.log("Client disconnected."));
});