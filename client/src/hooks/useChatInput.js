import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState, useRef, useEffect } from 'react';

import { useConversation } from '../context/ConversationContext';

export const useChatInput = (selectedUser) => {
	const { dispatchNewConversation } = useConversation();
	const [message, setMessage] = useState('');
	const { conversationId } = useParams();

	const sendRef = useRef();

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

	return { handleSendMessage, message, setMessage, sendRef };
};
