import { IoSend } from 'react-icons/io5';

const ChatInput = () => {
	return (
		<div className="px-3 py-1 flex flex-col p relative border-t-[1px] border-slate-500">
			<textarea
				className="textarea rounded-full w-full leading-5 pl-2 pr-7 min-h-0 h-9 resize-none"
				placeholder="Enter message"
			/>
			<button className="absolute inset-y-0 end-5 p-0 h-auto">
				<IoSend />
			</button>
		</div>
	);
};

export default ChatInput;
