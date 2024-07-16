import Conversation from './Conversation';

import { useCoversationList } from '../../hooks/useCoversationList';

const Conversations = () => {
	const { isLoading, conversationList } = useCoversationList();

	return (
		<div className="flex flex-1 flex-col gap-2 pr-0 overflow-auto">
			{isLoading ? (
				<span className="loading loading-spinner mx-auto loading-lg"></span>
			) : (
				conversationList.map((conversation) => <Conversation user={conversation} key={conversation._id} />)
			)}
		</div>
	);
};

export default Conversations;
