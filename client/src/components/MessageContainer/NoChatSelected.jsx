import { TiMessages } from 'react-icons/ti';
import { useAuth } from '../../context/AuthContext';

const NoChatSelected = () => {
	const {
		currentUser: { user }
	} = useAuth();

	return (
		<div className="h-full flex items-center justify-center">
			<div className="text-white text-center font-semibold">
				<p>Welcome 👋 {user.fullname}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl mx-auto  md:text-6xl text-center" />
			</div>
		</div>
	);
};

export default NoChatSelected;
