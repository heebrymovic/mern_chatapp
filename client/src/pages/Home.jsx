import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';

import { useAuth } from '../context/AuthContext';

const Home = () => {
	return (
		<div className="flex h-[100vh] w-[100%] md:w-auto md:h-[450px] md:flex-row bg-gray-400">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
