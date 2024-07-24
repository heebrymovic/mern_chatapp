import { TiMessages } from 'react-icons/ti';
import { FaBars } from 'react-icons/fa6';

import { useAuth } from '../../context/AuthContext';

const NoChatSelected = () => {
	const {
		currentUser: { user },
		setSidebarOpen
	} = useAuth();

	return (
		<div className="h-full flex items-center justify-center relative">
			<FaBars
				className="md:hidden absolute top-[20px] right-[10px] text-md text-white"
				onClick={() => setSidebarOpen((current) => !current)}
			/>
			<div className="text-white text-center font-semibold">
				<p>Welcome 👋 {user.fullname}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl mx-auto  md:text-6xl text-center" />
			</div>
		</div>
	);
};

export default NoChatSelected;
