const Message = ({ position = 'chat-end' }) => {
	return (
		<div className={`chat ${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					/>
				</div>
			</div>
			<div className="chat-bubble">You underestimate my power!</div>
			<time className="text-xs text-white">12:45</time>
		</div>
	);
};

export default Message;
