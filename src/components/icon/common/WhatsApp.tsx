import React, { SVGProps } from 'react';

const WhatsApp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 15 15'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
            d="M7.2 0a7 7 0 0 0-5.67 11.1l-.87 2.6 2.7-.86A7 7 0 1 0 7.2 0Zm4.08 9.88c-.17.48-.84.88-1.38 1-.36.07-.84.13-2.45-.53-2.06-.86-3.38-2.95-3.49-3.08-.1-.14-.83-1.1-.83-2.11 0-1 .51-1.5.72-1.7.17-.18.45-.26.71-.26h.24c.2.02.3.03.44.36l.63 1.51c.05.1.1.24.03.38-.06.14-.12.2-.22.32s-.2.21-.3.34c-.1.1-.21.23-.1.43.13.2.54.88 1.14 1.41.79.7 1.42.92 1.65 1.02.17.07.37.05.49-.08.16-.17.35-.45.55-.73.14-.2.31-.22.5-.15s1.19.56 1.4.66c.2.1.34.16.38.24.05.09.05.5-.12.97Z"			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default WhatsApp;
