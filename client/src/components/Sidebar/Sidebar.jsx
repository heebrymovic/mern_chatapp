import SearchBar from './SearchBar';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
	return (
		<div
			className="py-4 px-3 flex flex-col border-r-[1px] h-[100%] 
			border-slate-500 fixed z-[99] left-[-100%] md:left-[0] md:relative"
		>
			<SearchBar />
			<div className="divider h-px bg-slate-500" />
			<Conversations />
			<div className="divider h-px bg-slate-500" />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
