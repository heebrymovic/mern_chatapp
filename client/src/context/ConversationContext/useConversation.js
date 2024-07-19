import { useContext } from 'react';

import { ConversationContext } from './ConversationProvider';

export const useConversation = () => {
	const context = useContext(ConversationContext);

	if (!context) throw new Error('Conversation Context cannot be used outside its Provider');

	return context;
};
