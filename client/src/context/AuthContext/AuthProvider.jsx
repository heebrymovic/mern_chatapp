import { createContext, useState, useReducer, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

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
	const [onlineUsers, setOnlineUsers] = useState([]);

	const socket = useRef();

	useEffect(() => {
		if (currentUser.authenticated) {
			socket.current = io('http://localhost:7500', {
				query: {
					userId: currentUser.user._id
				}
			});

			socket.current.on('onlineUsers', (users) => setOnlineUsers(users));
		}
	}, [currentUser]);

	return (
		<AuthContext.Provider
			value={{ setCurrentUser, currentUser, friendLists, dispatchFriendLists, onlineUsers, socket }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
