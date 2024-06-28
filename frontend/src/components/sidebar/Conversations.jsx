import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex-col py-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIndex={idx === conversation.length - 1} />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : ""}
    </div>
  );
};

export default Conversations;

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
//   const [loading, setLoading] = useState(false);
//   const [conversations, setConversations] = useState([]);

//   useEffect(() => {
//     const getConversation = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/users");
//         const data = await res.json();
//         if (data.error) {
//           throw new Error(data.error);
//         }
//         setConversations(data);
//       } catch (error) {
//         toast.error(error.message);
//       }
//     };
//     getConversation();
//   }, []);

//   return { loading, conversations };
// };

// export default useGetConversations;
