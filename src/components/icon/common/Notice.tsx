import React, { SVGProps } from 'react';

const Notice = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 30 30'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path
			d="M19.306 28.052c0.155 0.339 0.062 0.738-0.228 0.977-1.81 1.385-4.344 1.385-6.154 0-0.288-0.238-0.381-0.635-0.228-0.973s0.515-0.536 0.887-0.484c1.603 0.214 3.227 0.214 4.83 0 0.374-0.055 0.739 0.141 0.894 0.48zM16.203 1.933c5.012-0.001 9.278 3.589 10.056 8.463l2.068 11.321c0.235 1.237-0.556 2.439-1.799 2.733-6.92 1.71-14.162 1.71-21.082 0h0.014c-1.24-0.297-2.025-1.499-1.785-2.733l2.061-11.321c0.781-4.875 5.050-8.465 10.063-8.463h0.404z"
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default Notice;
