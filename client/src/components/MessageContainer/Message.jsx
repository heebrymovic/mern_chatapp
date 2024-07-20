import { format } from 'date-fns';

const Message = ({ position, message, image }) => {
	return (
		<div className={`chat ${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble component" src={image} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${position === 'chat-end' && 'bg-blue-500'}`}>
				{message.message}
			</div>
			<time className="text-xs text-gray-300">{format(message.createdAt, 'K:mm aaa')}</time>
		</div>
	);
};

export default Message;
