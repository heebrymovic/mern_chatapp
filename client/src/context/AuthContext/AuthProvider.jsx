import { createContext, useState } from 'react';

const AuthContext = createContext();

const initialState = {
	user: null,
	authenticated: false
};
const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(initialState);

	return <AuthContext.AuthProvider value={{ setCurrentUser, currentUser }}>{children}</AuthContext.AuthProvider>;
};
