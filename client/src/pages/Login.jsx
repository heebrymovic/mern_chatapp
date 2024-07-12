import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="flex flex-col w-96">
			<div className="w-full p-4 rounded-lg shadow-md bg-gray-400">
				<h1 className="font-semibold text-center text-gray-300 text-2xl">
					Login <span className="text-sky-700">ChatApp</span>
				</h1>

				<form className="mt-5 flex flex-col gap-2">
					<div>
						<label className="text-gray-200 text-lg">Username</label>
						<input type="text" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<div>
						<label className="text-gray-200 text-lg">Password</label>
						<input type="password" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<p className="text-gray-200 my-2">
						<span>Don't have an account? </span>
						<Link className="text-sky-700" to="/register">
							Sign Up
						</Link>
					</p>

					<div>
						<button className="btn bg-sky-700 border-none text-white w-full">Sign In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
