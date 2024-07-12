import SearchBar from './SearchBar';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
	return (
		<div className="py-4 px-3 flex flex-col border-r-[1px] border-slate-500">
			<SearchBar />
			<div className="divider h-px bg-slate-500" />
			<Conversations />
			<div className="divider h-px bg-slate-500" />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
