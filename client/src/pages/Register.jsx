import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '../hooks/useSignup';

const initialValue = {
	fullname: '',
	username: '',
	password: '',
	confirmPassword: '',
	gender: ''
};

const Register = () => {
	const [formData, setFormData] = useState(initialValue);

	const { signup, isLoading } = useSignup();

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const handleGender = (gender) => setFormData({ ...formData, gender });

	const handleSubmit = async (e) => {
		e.preventDefault();

		const registerSuccess = await signup(formData);

		if (registerSuccess) {
			setFormData(initialValue);
			navigate('/login');
		}
	};

	return (
		<div className="flex flex-col w-96">
			<div className="w-full p-4 rounded-lg shadow-md bg-gray-400">
				<h1 className="font-semibold text-center text-gray-300 text-2xl">
					Register <span className="text-sky-700">ChatApp</span>
				</h1>

				<form className="mt-5 flex flex-col gap-2" onSubmit={handleSubmit}>
					<div>
						<label className="text-gray-200 text-lg">Fullname</label>
						<input
							type="text"
							id="fullname"
							className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered"
							value={formData.fullname}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label className="text-gray-200 text-lg">Username</label>
						<input
							type="text"
							id="username"
							className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered"
							value={formData.username}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label className="text-gray-200 text-lg">Password</label>
						<input
							type="password"
							id="password"
							className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label className="text-gray-200 text-lg">Confirm Password</label>
						<input
							type="password"
							id="confirmPassword"
							className="w-full p-1 px-2 text-white mt-1 input h-10 input-bordered"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
					</div>

					<div className="flex gap-2">
						<label className="cursor-pointer label">
							<input
								onChange={() => handleGender('male')}
								type="radio"
								name="gender"
								className="radio radio-primary"
								checked={formData.gender === 'male'}
							/>
							<span className="label-text text-gray-300 ml-2">Male</span>
						</label>

						<label className="cursor-pointer label">
							<input
								type="radio"
								name="gender"
								checked={formData.gender === 'female'}
								onChange={() => handleGender('female')}
								className="radio radio-primary"
							/>
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
						<button disabled={isLoading} className="btn bg-sky-700 border-none text-white w-full">
							{isLoading ? <span className="loading loading-spinner"></span> : `Sign Up`}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
