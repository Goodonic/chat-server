import ws from "ws";
import {WebSocketServer} from "ws"
const {Server} = ws;
import {v4 as uuid} from "uuid";

const clients = {};

const wss = new WebSocketServer({port: 3000});

wss.on("connection", (ws) => {
    const id = uuid();
    clients[id] = ws;

    console.log(`New client ${id}`)

    ws.on('message', (rawMessage) => {

    })
    ws.on('close', () => {
        delete clients[id];
        console.log(`Client ${id} is closed`)
    })

})