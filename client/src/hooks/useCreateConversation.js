import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useConversation } from '../context/ConversationContext';
import toast from 'react-hot-toast';

export const useCreateConversation = () => {
	const navigate = useNavigate();
	const { dispatchNewConversation } = useConversation();

	const createConversation = async (receiverId, conversationId) => {
		try {
			dispatchNewConversation({ type: 'LOADING_CONVERSATION' });
			let res;
			if (receiverId) {
				res = await axios.post('/api/messages/createConversation', { receiverId });
			} else {
				res = await axios.get(`/api/messages/${conversationId}`);
			}

			dispatchNewConversation({ type: 'CONVERSATION_SUCCESS', payload: res.data.conversation });
		} catch (err) {
			toast.error(err.response.data.message || err.message);
		}
	};

	return { createConversation };
};
