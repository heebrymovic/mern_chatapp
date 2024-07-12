import { HiSearch } from 'react-icons/hi';

const SearchBar = () => {
	return (
		<div className="flex gap-3 items-center">
			<input className="input w-56 input-bordered h-9 px-3 rounded-full" placeholder="Search...." />
			<button className="bg-sky-700 rounded-full w-9 h-9 text-white text-lg flex items-center justify-center">
				<HiSearch />
			</button>
		</div>
	);
};

export default SearchBar;
