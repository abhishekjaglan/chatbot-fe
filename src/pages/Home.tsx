import ChatWindow from '../components/ChatWindow';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;