import * as React from "react";
import type {SVGProps} from "react";

const SvgLive = (props: SVGProps<SVGSVGElement>) =>
  <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 40 40"
       fill="#67707B"
      //  fill="#3BC117"
       className='svg-icon'
       {...props}
  >
    <path
      d="M5 8C2.79086 8 1 9.79086 1 12V20C1 22.2091 2.79086 24 5 24H27C29.2091 24 31 22.2091 31 20V12C31 9.79086 29.2091 8 27 8H5ZM3 12C3 10.8954 3.89543 10 5 10H27C28.1046 10 29 10.8954 29 12V20C29 21.1046 28.1046 22 27 22H5C3.89543 22 3 21.1046 3 20V12ZM7.888 13.4H6V19H10.416V17.536H7.888V13.4ZM13.4655 13.4H11.5775V19H13.4655V13.4ZM20.9984 13.4L18.6304 19H16.7744L14.4064 13.4H16.4384L17.7744 16.672L19.1424 13.4H20.9984ZM26.4823 19V17.576H23.6822V16.84H26.0502V15.48H23.6822V14.824H26.3783V13.4H21.8263V19H26.4823Z"
      // stroke='currentColor'
      // strokeWidth={2}
      // strokeLinecap='round'
      // strokeLinejoin='round'
    >
    </path>
  </svg>
export default SvgLive;
