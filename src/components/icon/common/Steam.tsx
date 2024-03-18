import React, { SVGProps } from 'react';

const Steam = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='-3 -4 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
        <g clip-path="url(#a)" fill="#FFFFFF">
            <path 
                d="M16 8A8 8 0 0 1 .17 9.642l3.177 1.335a2.098 2.098 0 0 0 4.154-.396l.004-.002 2.402-1.79a2.727 2.727 0 1 0 .031-5.456A2.728 2.728 0 0 0 7.211 6.01l-1.76 2.462a2.068 2.068 0 0 0-1.194.34L.061 7.048C.533 3.079 3.905 0 8 0a8 8 0 0 1 8 8ZM4.949 11.651l-1.03-.432a1.62 1.62 0 0 0 3.106-.665 1.627 1.627 0 0 0-1.621-1.607c-.191 0-.38.033-.573.106l1.028.432a1.174 1.174 0 0 1-.91 2.166Zm4.989-3.734a1.857 1.857 0 0 1-1.854-1.855c0-1.023.832-1.855 1.854-1.855 1.023 0 1.854.832 1.854 1.855a1.857 1.857 0 0 1-1.854 1.855Zm0-.455a1.401 1.401 0 1 0-.002-2.802 1.401 1.401 0 0 0 .002 2.802Z"
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            >
            </path>
        </g>
        <defs>
            <clipPath id="a">
                <path 
                    d="M0 0h16v16H0z"
                    strokeWidth={1.5}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                </path>
            </clipPath>
        </defs>
	</svg>
);
export default Steam;
