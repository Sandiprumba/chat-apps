import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="flex-col py-2 overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
