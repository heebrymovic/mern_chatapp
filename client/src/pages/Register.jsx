import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="flex flex-col w-96">
			<div className="w-full p-4 rounded-lg shadow-md bg-gray-400">
				<h1 className="font-semibold text-center text-gray-300 text-2xl">
					Register <span className="text-sky-700">ChatApp</span>
				</h1>

				<form className="mt-5 flex flex-col gap-2">
					<div>
						<label className="text-gray-200 text-lg">Fullname</label>
						<input type="text" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<div>
						<label className="text-gray-200 text-lg">Username</label>
						<input type="text" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<div>
						<label className="text-gray-200 text-lg">Password</label>
						<input type="password" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<div>
						<label className="text-gray-200 text-lg">Confirm Password</label>
						<input type="password" className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered" />
					</div>

					<div className="flex gap-2">
						<label className="cursor-pointer label">
							<input type="radio" name="gender" className="radio radio-primary" />
							<span className="label-text text-gray-300 ml-2">Male</span>
						</label>

						<label className="cursor-pointer label">
							<input type="radio" name="gender" className="radio radio-primary" />
							<span className="label-text text-gray-300 ml-2">Female</span>
						</label>
					</div>

					<p className="text-gray-200 my-2">
						<span>Already have an account? </span>
						<Link className="text-sky-700" to="/login">
							Sign In
						</Link>
					</p>

					<div>
						<button className="btn bg-sky-700 border-none text-white w-full">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
