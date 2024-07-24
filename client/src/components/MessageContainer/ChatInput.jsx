import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { IoSend } from 'react-icons/io5';

import { useChatInput } from '../../hooks/useChatInput';
import { useAuth } from '../../context/AuthContext';
import { useConversation } from '../../context/ConversationContext';

const ChatInput = ({ selectedUser }) => {
	const { conversationId } = useParams();
	const { newConversation, dispatchNewConversation } = useConversation();

	const [stillTyping, setStillTyping] = useState(false);
	const [startedTyping, setStartedTyping] = useState(false);
	const timerRef = useRef();

	const {
		socket,
		currentUser: { user }
	} = useAuth();
	const { handleSendMessage, setMessage, message, sendRef } = useChatInput(selectedUser);

	useEffect(() => {
		socket.current?.on('newMessage', (newMessage) => {
			conversationId === newMessage.conversationId &&
				dispatchNewConversation({ type: 'SEND_MESSAGE', payload: newMessage });
		});

		return () => socket.current?.off('newMessage');
	}, [socket, newConversation, dispatchNewConversation, conversationId]);

	useEffect(() => {
		if (!stillTyping && startedTyping) {
			console.log('not typing');
			socket?.current?.emit('stopTyping', { conversationId, receiverId: selectedUser._id });
		}
	}, [stillTyping, startedTyping]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') return;

		clearTimeout(timerRef.current);

		setStillTyping(true);
		setStartedTyping(true);

		socket.current.emit('');

		socket.current.emit('isTyping', { conversationId, receiverId: selectedUser._id, senderId: user });

		timerRef.current = setTimeout(() => {
			setStillTyping(false);
		}, 500);
	};

	return (
		<div className="px-3 py-1 flex flex-col p relative border-t-[1px] border-slate-500">
			<textarea
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				value={message}
				className="textarea rounded-full w-full leading-5 pl-2 pr-7 min-h-0 h-9 resize-none"
				placeholder="Enter message"
			/>
			<button ref={sendRef} className="absolute inset-y-0 end-5 p-0 h-auto" onClick={handleSendMessage}>
				<IoSend />
			</button>
		</div>
	);
};

export default ChatInput;
