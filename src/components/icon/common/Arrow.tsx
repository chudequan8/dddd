import React, { SVGProps } from 'react';

const Arrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 32 32'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path d="M11.386 3l13 13-13 13-3.772-3.772 9.228-9.228-9.228-9.228z"></path>
	</svg>
);
export default Arrow;
