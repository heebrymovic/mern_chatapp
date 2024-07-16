import emojiFromText from 'emoji-from-text';

const Conversation = ({ user }) => {
	const { username, profilePicture } = user;

	return (
		<div>
			<div className="flex gap-3 cursor-pointer hover:bg-sky-700 p-1 rounded-md mb-0 transition">
				<div className="avatar online">
					<div className="w-10 rounded-full">
						<img src={profilePicture} />
					</div>
				</div>

				<div className="flex-1 flex justify-between items-center px-1 text-white">
					<p>{username}</p>
					<span>{emojiFromText(username, true).match.emoji.char}</span>
				</div>
			</div>
			<div className="divider h-px my-0" />
		</div>
	);
};

export default Conversation;
