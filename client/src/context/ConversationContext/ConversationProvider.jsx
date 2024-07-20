import { createContext, useReducer } from 'react';

export const ConversationContext = createContext();

const initialState = {
	conversation: {},
	isLoadingConversation: false
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOADING_CONVERSATION':
			return { ...state, isLoadingConversation: true };
		case 'CONVERSATION_SUCCESS':
			return { ...state, conversation: action.payload, isLoadingConversation: false };
		case 'SEND_MESSAGE':
			return {
				...state,
				conversation: { ...state.conversation, messages: [...state.conversation.messages, action.payload] },
				isLoadingConversation: false
			};
		default:
			return state;
	}
};

const ConversationProvider = ({ children }) => {
	const [newConversation, dispatchNewConversation] = useReducer(reducer, initialState);

	return (
		<ConversationContext.Provider value={{ newConversation, dispatchNewConversation }}>
			{children}
		</ConversationContext.Provider>
	);
};

export default ConversationProvider;
