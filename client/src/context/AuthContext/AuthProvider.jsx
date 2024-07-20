import { createContext, useState, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
	user: null,
	authenticated: false
};

const friendList = {
	isLoading: true,
	friends: [],
	searchFriends: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOADING_FRIENDS':
			return { ...state, isLoading: true };
		case 'FRIEND_SUCCESS':
			return { ...state, isLoading: false, friends: action.payload, searchFriends: action.payload };
		case 'SEARCH_FRIENDS':
			return {
				...state,
				searchFriends: !action.payload
					? state.friends
					: state.friends.filter((friend) =>
							friend.fullname.toLowerCase().includes(action.payload.toLowerCase())
					  )
			};
		default:
			return state;
	}
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(initialState);
	const [friendLists, dispatchFriendLists] = useReducer(reducer, friendList);

	return (
		<AuthContext.Provider value={{ setCurrentUser, currentUser, friendLists, dispatchFriendLists }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
