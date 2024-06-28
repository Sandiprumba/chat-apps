import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="py-0 my-0 divider h1" />}
    </>
  );
};
export default Conversation;

//STARTER CODE
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex justify-between gap-3">
//             <p className="font-bold text-gray-200">Lost Panda</p>
//             <span className="text-xl">🐼</span>
//           </div>
//         </div>
//       </div>
//       <div className="py-0 my-0 divider h1" />
//     </>
//   );
// };

// export default Conversation;
