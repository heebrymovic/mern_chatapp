import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {
        currentUser: { authenticated },
        setCurrentUser
    } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const getLoginUser = async () => {
            try {
                const res = await axios.get('/api/user/getCurrentUser');

                setCurrentUser({ user: { ...res.data.users }, authenticated: true });
            } catch (err) {
                navigate('/login');
            }
        };

        !authenticated && getLoginUser();
    }, [authenticated, setCurrentUser]);

    return authenticated ? children : null;
};

export default ProtectedRoute;
