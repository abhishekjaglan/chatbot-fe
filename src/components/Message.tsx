import type { MessageProps } from "../types";


const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;