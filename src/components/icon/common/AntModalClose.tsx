import React, { SVGProps } from 'react';

const AntModalClose = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d="M4.965 5.036c0.865-0.905 2.3-0.937 3.205-0.072v0l7.832 7.831 7.718-7.725c0.858-0.911 2.293-0.954 3.205-0.096 0.864 0.813 0.947 2.144 0.224 3.057l-0.128 0.148-7.813 7.821 7.891 7.895c0.77 0.874 0.756 2.207-0.064 3.064-0.865 0.905-2.3 0.937-3.205 0.072v0l-7.826-7.825-7.737 7.745c-0.858 0.911-2.293 0.954-3.205 0.096-0.864-0.813-0.947-2.144-0.224-3.057l0.128-0.148 7.831-7.841-7.896-7.901c-0.77-0.874-0.756-2.207 0.064-3.064z"
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default AntModalClose;
