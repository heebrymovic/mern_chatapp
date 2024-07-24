import emojiFromText from 'emoji-from-text';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useCreateConversation } from '../../hooks/useCreateConversation';
import { useConversation } from '../../context/ConversationContext';
import { useAuth } from '../../context/AuthContext';

const Conversation = ({ user }) => {
	const { username, profilePicture, _id } = user;
	const { conversationId } = useParams();
	const { createConversation } = useCreateConversation();
	const { newConversation, dispatchNewConversation } = useConversation();
	const { onlineUsers } = useAuth();

	const selectedConversation = newConversation?.conversation?.participants?.includes(_id);

	const handleCreateConversation = () => {
		!selectedConversation && createConversation(_id);
	};

	useEffect(() => {
		return () => dispatchNewConversation({ type: 'CONVERSATION_SUCCESS', payload: {} });
	}, []);

	return (
		<div onClick={handleCreateConversation}>
			<div
				className={`flex gap-3 cursor-pointer hover:bg-sky-700 p-1 rounded-md mb-0 transition ${
					selectedConversation && 'bg-sky-700'
				}`}
			>
				<div className={`avatar ${onlineUsers.includes(_id) && 'online'}`}>
					<div className="w-10 rounded-full">
						<img src={profilePicture} />
					</div>
				</div>

				<div className="flex-1 flex justify-between items-center px-1 text-white">
					<p>{username}</p>
					<span>{emojiFromText(username, true).match.emoji.char}</span>
				</div>
			</div>
			<div className="divider h-px my-0" />
		</div>
	);
};

export default Conversation;
