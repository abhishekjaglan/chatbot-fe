import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import Spinner from './Spinner';
import { sendMessageToBackend } from '../services/api';
import type { MessageType } from '../types';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      const errorMessage: MessageType = { text: 'Sorry, something went wrong.apsefijapegjnapsdgnopasjgr pajetpa asetp apgt japs tasste ja;ofj pasjf pasjgt p;asjg apsjtpasjt pasj apsejtpasjetpasejtpasjdfopasjt;ajot ;ajtpaket;ojspft astjapsetjkpasejt atejasjtgasjt las itj', isUser: false };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[80vh] bg-gray-900 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        {isLoading && <Spinner />}
        <div ref={messagesEndRef} />
      </div>
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;