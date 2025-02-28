const express = require("express");
const { WebSocketServer } = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());

const server = app.listen(5000, () => console.log("WebSocket Server running on port 5000"));
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        wss.clients.forEach(client => client.send(message));
    });
});
