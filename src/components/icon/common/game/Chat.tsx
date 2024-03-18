import React, { SVGProps } from 'react';

const Chat = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 32 32'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path d="M16 1.5c6.94 0 12.567 5.433 12.567 12.136 0 3.67-1.687 6.959-4.352 9.185l-8.214 7.679-0.002-4.728c-6.94-0.001-12.565-5.434-12.565-12.136s5.626-12.136 12.567-12.136z"></path>
	</svg>
);
export default Chat;
