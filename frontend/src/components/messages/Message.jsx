const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="text-white bg-blue-500 chat-bubble">Hi! what is upp?</div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">12:42</div>
    </div>
  );
};

export default Message;