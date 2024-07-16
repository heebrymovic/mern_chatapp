import { BiLogOut } from 'react-icons/bi';

import { useLogout } from '../../hooks/useLogout';

const LogoutButton = () => {
	const { isLoading, logout } = useLogout();

	return (
		<div className=" cursor-pointer self-start">
			{isLoading ? (
				<span className="loading loading-spinner"></span>
			) : (
				<BiLogOut onClick={logout} className="h-6 w-6 text-white" />
			)}
		</div>
	);
};

export default LogoutButton;
