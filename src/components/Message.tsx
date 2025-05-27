import type { MessageProps } from "../types";

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {isUser ? (
        <div className="bg-gray-100 text-black rounded-lg px-4 py-2 max-w-md ml-auto">
          {text}
        </div>
      ) : (
        <div className="text-white px-4 py-2 max-w-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Message;