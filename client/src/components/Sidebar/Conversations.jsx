import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Conversation from './Conversation';
import { useCoversationList } from '../../hooks/useCoversationList';
import { useConversation } from '../../context/ConversationContext';

const Conversations = () => {
	const { isLoading, conversationList } = useCoversationList();

	const navigate = useNavigate();

	const { newConversation } = useConversation();

	useEffect(() => {
		const conversationId = newConversation?.conversation?._id;

		if (conversationId) {
			navigate(`/${conversationId}`);
		}
	}, [newConversation]);

	return (
		<div className="flex flex-1 flex-col gap-2 pr-0 overflow-auto">
			{isLoading ? (
				<span className="loading loading-spinner text-white mt-5 mx-auto loading-lg"></span>
			) : (
				conversationList.map((conversation) => <Conversation user={conversation} key={conversation._id} />)
			)}
		</div>
	);
};

export default Conversations;
