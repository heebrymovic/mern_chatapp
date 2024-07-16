import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useLogout = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { setCurrentUser } = useAuth();

	const logout = async () => {
		setIsLoading(true);

		const res = await axios.get('/api/auth/logout');

		setCurrentUser({ user: null, authenticated: false });

		toast.success('You have successfully logged out');

		navigate('/login', { replace: true });
	};

	return { isLoading, logout };
};
