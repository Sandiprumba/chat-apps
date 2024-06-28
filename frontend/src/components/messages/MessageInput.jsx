import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input type="text" className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" className="absolute inset-y-0 flex items-center end-0 pe-3">
          {loading ? <span className="loading loading-spinner"></span> : <BsSend className="w-6 h-5 text-white" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

//STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input type="text" className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" />
//         <button type="submit" className="absolute inset-y-0 flex items-center end-0 pe-3">
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
