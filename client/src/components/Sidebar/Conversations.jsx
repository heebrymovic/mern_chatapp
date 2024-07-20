import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Conversation from './Conversation';

import { useCoversations } from '../../hooks/useCoversations';
import { useConversation } from '../../context/ConversationContext';
import { useAuth } from '../../context/AuthContext';

const Conversations = () => {
	const {
		friendLists: { isLoading, friends, searchFriends }
	} = useAuth();

	const empty = useCoversations();

	return (
		<div className="flex flex-1 flex-col gap-2 pr-0 overflow-auto">
			{isLoading && <span className="loading loading-spinner text-white mt-5 mx-auto loading-lg"></span>}
			{!isLoading && friends.length === 0 && (
				<p className="text-red-700 text-center">
					OOPS!! Sorry. <br /> No registered friends yet
				</p>
			)}
			{!isLoading && friends.length > 0 && searchFriends.length === 0 && (
				<p className="text-white text-center">User does not exist</p>
			)}
			{!isLoading &&
				searchFriends.map((conversation) => <Conversation user={conversation} key={conversation._id} />)}
		</div>
	);
};

export default Conversations;
