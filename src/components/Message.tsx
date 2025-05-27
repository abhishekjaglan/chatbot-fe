import type { MessageProps } from "../types";


const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {isUser ? (
        <div className="bg-neutral-800 text-neutral-200 text-lg rounded-lg px-4 py-2 max-w-md ml-auto">
          {text}
        </div>
      ) : (
        <div className="text-neutral-200 px-4 py-2 w-full text-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Message;