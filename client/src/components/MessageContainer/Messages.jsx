import { useRef, useEffect } from 'react';

import Message from './Message';

const Messages = ({ conversation, activeUser, selectedUser }) => {
	const messageAreaRef = useRef();

	useEffect(() => {
		const scrollEl = messageAreaRef.current;
		scrollEl.scroll({ top: scrollEl?.scrollHeight, behavior: 'smooth' });
	}, [conversation]);

	return (
		<div className="flex flex-col flex-1 gap-1 p-3 overflow-auto" ref={messageAreaRef}>
			{conversation?.messages?.length === 0 && <p className="text-center text-white">No Conversations Yet</p>}
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
