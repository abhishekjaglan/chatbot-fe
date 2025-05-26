import { useState } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import Spinner from './Spinner';
import { sendMessageToBackend } from '../services/api';

interface MessageType {
  text: string;
  isUser: boolean;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: MessageType = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessageToBackend(message);
      const botMessage: MessageType = { text: response, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: MessageType = { text: 'Sorry, something went wrong.', isUser: false };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        {isLoading && <Spinner />}
      </div>
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;