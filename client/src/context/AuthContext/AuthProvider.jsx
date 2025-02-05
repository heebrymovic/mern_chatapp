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

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const socket = useRef();
	useEffect(() => {
		if (currentUser.authenticated) {
			/*In Preoduction Change the socket URL to server URL not Localhost url
					intially: http://localhost:PORT__NUMBER
			*/
			socket.current = io('https://mern-chatapp-alhf.onrender.com', {
				query: {
					userId: currentUser.user._id
				}
			});

			socket.current.on('onlineUsers', (users) => setOnlineUsers(users));
		}
	}, [currentUser]);

	return (
		<AuthContext.Provider
			value={{
				setCurrentUser,
				currentUser,
				friendLists,
				dispatchFriendLists,
				onlineUsers,
				socket,
				sidebarOpen,
				setSidebarOpen
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
