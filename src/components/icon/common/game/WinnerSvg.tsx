import React, { SVGProps } from 'react';

const WinnerSvg = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<path fill="currentColor" d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z"></path>
	</svg>
);
export default WinnerSvg;
