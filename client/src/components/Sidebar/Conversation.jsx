const Conversation = () => {
	return (
		<div>
			<div className="flex gap-3 cursor-pointer hover:bg-sky-700 p-1 rounded-md mb-0 transition">
				<div className="avatar online">
					<div className="w-10 rounded-full">
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>

				<div className="flex-1 flex justify-between items-center px-1 text-white">
					<p>John Doe</p>
					<span>🤩</span>
				</div>
			</div>
			<div className="divider h-px my-0" />
		</div>
	);
};

export default Conversation;
