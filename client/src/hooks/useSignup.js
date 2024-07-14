import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useSignup = () => {
	const [isLoading, setIsLoading] = useState(false);

	const signup = async (formData) => {
		if (handleError({ ...formData })) return;

		try {
			setIsLoading(true);
			const res = await axios.post('/api/auth/register', formData);

			toast.success(res.data.message);
			return true;
		} catch (err) {
			toast.error(err.response.data.message || err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { signup, isLoading };
};

const handleError = ({ fullname, username, password, confirmPassword, gender }) => {
	if (!fullname || !username || !password || !confirmPassword || !gender) {
		toast.error('All fields are required');
		return true;
	}

	if (password !== confirmPassword) {
		toast.error("Password doesn't match");
		return true;
	}
};
