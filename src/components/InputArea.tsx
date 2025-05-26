import { useState } from 'react';
import type { InputAreaProps } from '../types';

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-4 bg-gray-800">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;