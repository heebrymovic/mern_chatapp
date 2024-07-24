/*import { format } from 'date-fns';*/

// import TimeAgo from 'timeago-react';
import { format, register } from 'timeago.js';

/*const localeFunc = (number, index, totalSec) => {
	return [
		['just now', 'right now'],
		['just now', 'right now'],
		['1 minute ago', 'in 1 minute'],
		['%s minutes ago', 'in %s minutes'],
		['1 hour ago', 'in 1 hour'],
		['%s hours ago', 'in %s hours'],
		['1 day ago', 'in 1 day'],
		['%s days ago', 'in %s days'],
		['1 week ago', 'in 1 week'],
		['%s weeks ago', 'in %s weeks'],
		['1 month ago', 'in 1 month'],
		['%s months ago', 'in %s months'],
		['1 year ago', 'in 1 year'],
		['%s years ago', 'in %s years']
	][index];
};

register('my-locale', localeFunc);*/

const Message = ({ position = 'chat-start', message = {}, image = '', isTyping = false }) => {
	return (
		<div className={`chat ${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble component" src={image} />
				</div>
			</div>
			<div
				className={`chat-bubble text-white ${position} ${position === 'chat-end' && 'bg-blue-500'} ${
					isTyping && 'type'
				}`}
				style={{ wordWrap: 'break-word' }}
			>
				<span className={`${isTyping && 'typing '}`}>{isTyping ? 'Typing..' : message.message}</span>
			</div>
			{!isTyping && <time className="text-xs text-gray-300">{format(message.createdAt, 'my-locale')}</time>}
		</div>
	);
};

export default Message;
