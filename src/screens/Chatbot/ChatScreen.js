import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('http://localhost:5000/chat', { message: input });
            const botMessage = { role: "bot", content: response.data.reply };

            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error("Error:", error);
        }

        setInput('');
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <ScrollView>
                {messages.map((msg, index) => (
                    <Text key={index} style={{ marginVertical: 5, color: msg.role === 'bot' ? 'blue' : 'black' }}>
                        {msg.role === 'bot' ? "Bot: " : "You: "} {msg.content}
                    </Text>
                ))}
            </ScrollView>
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
                placeholder="Type your message..."
                value={input}
                onChangeText={setInput}
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

export default ChatScreen;
