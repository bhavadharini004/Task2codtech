import React, { useState, useEffect } from "react";

const ws = new WebSocket("ws://localhost:5000");

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        ws.onmessage = (event) => {
            setMessages(prev => [...prev, event.data]);
        };
    }, []);

    const sendMessage = () => {
        ws.send(input);
        setInput("");
    };

    return (
        <div>
            <h2>Real-Time Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
