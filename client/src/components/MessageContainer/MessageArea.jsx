import { FaBars } from 'react-icons/fa6';

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
		currentUser: { user: activeUser },
		setSidebarOpen
	} = useAuth();

	const getSelectedUser = conversation?.participants?.find((participant) => participant !== activeUser._id);

	const { user: selectedUser } = useGetUser(getSelectedUser);

	return (
		<div className="flex flex-col h-full">
			<div className="flex bg-slate-500 text-white justify-between items-center py-3 px-2">
				<span>To: {selectedUser.fullname}</span>
				<FaBars className="md:hidden" onClick={() => setSidebarOpen((current) => !current)} />
			</div>
			<Messages conversation={conversation} activeUser={activeUser} selectedUser={selectedUser} />
			<ChatInput selectedUser={selectedUser} />
		</div>
	);
};
export default MessageArea;
