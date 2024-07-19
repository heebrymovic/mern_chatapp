import Messages from './Messages';
import ChatInput from './ChatInput';

import { useConversation } from '../../context/ConversationContext';
import { useAuth } from '../../context/AuthContext';
import { useGetUser } from '../../hooks/useGetUser';

const MessageArea = () => {
	const {
		newConversation: { isLoadingConversation, conversation }
	} = useConversation();

	const {
		currentUser: { user: activeUser }
	} = useAuth();

	const getSelectedUser = conversation?.participants?.find((participant) => participant !== activeUser._id);

	const { user: selectedUser } = useGetUser(getSelectedUser);

	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-col">
				<div className="py-3 px-2 bg-slate-500 text-white">To: {selectedUser.fullname}</div>
			</div>
			<Messages conversation={conversation} activeUser={activeUser} selectedUser={selectedUser} />
			<ChatInput />
		</div>
	);
};
export default MessageArea;
