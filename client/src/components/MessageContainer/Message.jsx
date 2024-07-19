import { format } from 'date-fns';

const Message = ({ position, message, image }) => {
	return (
		<div className={`chat ${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble component" src={image} />
				</div>
			</div>
			<div className="chat-bubble">{message.message}</div>
			<time className="text-xs text-white">{format(message.createdAt, 'K:mm aaa')}</time>
		</div>
	);
};

export default Message;
