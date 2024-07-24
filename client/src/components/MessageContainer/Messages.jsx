import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Message from './Message';
import { useAuth } from '../../context/AuthContext';

const Messages = ({ conversation, activeUser, selectedUser }) => {
	const messageAreaRef = useRef();
	const { conversationId } = useParams();
	const [isTyping, setIsTyping] = useState(false);
	const [messageReceiver, setMessageReceiver] = useState('');

	const {
		socket,
		currentUser: { user }
	} = useAuth();

	useEffect(() => {
		if (conversation || isTyping) {
			const scrollEl = messageAreaRef.current;
			scrollEl.scroll({ top: scrollEl?.scrollHeight, behavior: 'smooth' });
		}
	}, [conversation, isTyping]);

	useEffect(() => {
		socket.current?.on('isTyping', (data) => {
			if (conversationId !== data.conversationId) return;

			setIsTyping(true);
			setMessageReceiver(data.senderId.profilePicture);
		});

		socket.current?.on('stopTyping', (data) => {
			if (conversationId === data.conversationId) {
				setIsTyping(false);
				setMessageReceiver('');
			}
		});

		return () => socket.current?.off('isTyping');
	}, [conversationId]);

	return (
		<div className="flex flex-col flex-1 gap-1 p-3 overflow-y-auto" ref={messageAreaRef}>
			{!isTyping && conversation?.messages?.length === 0 && (
				<p className="text-center text-white">No Conversations Yet</p>
			)}
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
			{isTyping && <Message isTyping={isTyping} image={messageReceiver} />}
		</div>
	);
};

export default Messages;
