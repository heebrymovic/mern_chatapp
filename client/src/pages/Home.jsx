import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';

const Home = () => {
	return (
		<div className="flex sm:h-[450px] bg-gray-400">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
