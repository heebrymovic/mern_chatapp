import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useConversation } from '../../context/ConversationContext';
import { useAuth } from '../../context/AuthContext';
import { useGetUser } from '../../hooks/useGetUser';
import { useCreateConversation } from '../../hooks/useCreateConversation';
import MessageArea from './MessageArea';
import NoChatSelected from './NoChatSelected';
import Loading from './Loading';

const MessageContainer = () => {
	const { conversationId } = useParams();

	const {
		newConversation: { isLoadingConversation }
	} = useConversation();

	const { createConversation } = useCreateConversation();

	useEffect(() => {
		conversationId && createConversation(null, conversationId);
	}, []);

	return (
		<div className="w-[100%] md:w-[400px]">
			{isLoadingConversation && <Loading />}
			{!conversationId && !isLoadingConversation && <NoChatSelected />}
			{conversationId && !isLoadingConversation && <MessageArea />}
		</div>
	);
};

export default MessageContainer;
