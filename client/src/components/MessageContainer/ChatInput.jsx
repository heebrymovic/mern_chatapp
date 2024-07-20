import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoSend } from 'react-icons/io5';

import { useConversation } from '../../context/ConversationContext';

const ChatInput = ({ selectedUser }) => {
	const { conversationId } = useParams();
	const [message, setMessage] = useState('');

	const sendRef = useRef();

	const { dispatchNewConversation } = useConversation();

	useEffect(() => {
		let keysPressed = {};

		const keydown = (e) => {
			keysPressed[e.key] = true;

			if (!keysPressed['Shift'] && e.key === 'Enter') sendRef.current.click();
		};

		document.addEventListener('keydown', keydown);

		document.addEventListener('keyup', (e) => {
			delete keysPressed[e.key];
		});

		return () => document.removeEventListener('keydown', keydown);
	}, [sendRef]);

	const handleSendMessage = async () => {
		if (!message.trim()) return;

		try {
			const newMessage = { message, conversationId, receiverId: selectedUser._id };
			const res = await axios.post('/api/messages/sendMessage', newMessage);
			dispatchNewConversation({ type: 'SEND_MESSAGE', payload: res.data.message });
			setMessage('');
		} catch (err) {
			toast.error(err.response.data.message || err.message);
		}
	};

	return (
		<div className="px-3 py-1 flex flex-col p relative border-t-[1px] border-slate-500">
			<textarea
				onChange={(e) => setMessage(e.target.value)}
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
