import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
	user: null,
	authenticated: false
};
const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(initialState);

	return <AuthContext.Provider value={{ setCurrentUser, currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
