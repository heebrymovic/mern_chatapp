import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useConversation } from '../context/ConversationContext';
import { useAuth } from '../context/AuthContext';

export const useCoversations = () => {
	const { dispatchFriendLists } = useAuth();

	const navigate = useNavigate();

	const { newConversation } = useConversation();

	useEffect(() => {
		const getConversationList = async () => {
			try {
				dispatchFriendLists({ type: 'LOADING_FRIENDS' });

				const res = await axios.get('/api/user/friends');

				dispatchFriendLists({ type: 'FRIEND_SUCCESS', payload: res.data.users });
			} catch (err) {
				console.log(err);
			}
		};

		getConversationList();
	}, []);

	useEffect(() => {
		const conversationId = newConversation?.conversation?._id;

		if (conversationId) {
			navigate(`/${conversationId}`);
		}
	}, [newConversation]);

	return null;
};

export default useCoversations;
