import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const { setCurrentUser } = useAuth();

	const login = async (formData) => {
		if (handleError({ ...formData })) return;

		try {
			setIsLoading(true);
			const res = await axios.post('/api/auth/login', formData);

			toast.success(res.data.message);

			setCurrentUser({ user: res.data.user, authenticated: true });

			navigate('/');
		} catch (err) {
			toast.error(err.response.data.message || err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { login, isLoading };
};

const handleError = ({ username, password }) => {
	if (!username || !password) {
		toast.error('All fields are required');
		return true;
	}
};
