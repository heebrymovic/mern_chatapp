import Message from './Message';

const Messages = () => {
	return (
		<div className="flex flex-col flex-1 gap-1 p-3 overflow-auto">
			<Message />
			<Message position={'chat-start'} />
			<Message />
			<Message />
			<Message position={'chat-start'} />
			<Message />
			<Message position={'chat-start'} />
			<Message />
			<Message position={'chat-start'} />
			<Message />
		</div>
	);
};

export default Messages;
