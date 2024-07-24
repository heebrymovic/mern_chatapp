import { HiSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const SearchBar = () => {
	const {
		friendLists: { friends },
		dispatchFriendLists
	} = useAuth();
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		dispatchFriendLists({ type: 'SEARCH_FRIENDS', payload: searchText });
	}, [searchText]);

	return (
		<div className="flex gap-3 items-center">
			<input
				className="input w-56 input-bordered h-9 px-3 rounded-full"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="Search...."
			/>
		</div>
	);
};

export default SearchBar;
