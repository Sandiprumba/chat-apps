const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">Lost Panda</p>
            <span className="text-xl">🐼</span>
          </div>
        </div>
      </div>
      <div className="py-0 my-0 divider h1" />
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
