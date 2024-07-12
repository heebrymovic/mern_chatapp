import Messages from './Messages';
import ChatInput from './ChatInput';
import NoChatSelected from './NoChatSelected';

const MessageContainer = () => {
	const isChatSelected = false;
	return (
		<div className="md:min-w-[380px]">
			{!isChatSelected ? (
				<NoChatSelected />
			) : (
				<div className="flex flex-col h-full">
					<div className="flex flex-col">
						<div className="py-3 px-2 bg-slate-500 text-white">To: John Doe</div>
					</div>
					<Messages />
					<ChatInput />
				</div>
			)}
		</div>
	);
};

export default MessageContainer;
