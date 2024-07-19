import Message from './Message';

const Messages = ({ conversation, activeUser, selectedUser }) => {
	return (
		<div className="flex flex-col flex-1 gap-1 p-3 overflow-auto">
			{conversation?.messages?.length === 0 && <p className="text-center text-white">No Chats Yet</p>}
			{conversation?.messages?.map((message) => (
				<Message
					key={message._id}
					message={message}
					position={activeUser._id === message.senderId ? 'chat-end' : 'chat-start'}
					image={
						activeUser._id === message.senderId ? activeUser.profilePicture : selectedUser.profilePicture
					}
				/>
			))}
		</div>
	);
};

export default Messages;
