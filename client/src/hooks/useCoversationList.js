import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useCoversationList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [conversationList, setConversationList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getConversationList = async () => {
			try {
				setIsLoading(true);

				const res = await axios.get('/api/user/friends');

				setConversationList(res.data.users);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};

		getConversationList();
	}, []);

	return { isLoading, conversationList };
};
