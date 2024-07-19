import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGetUser = (userId) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axios.get(`/api/user/getUser/${userId}`);
				setUser(res.data.users);
			} catch (err) {
				console.log(err);
			}
		};

		userId && getUser();
	}, [userId]);

	return { user };
};
