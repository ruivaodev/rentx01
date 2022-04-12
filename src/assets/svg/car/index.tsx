import * as React from "react"

import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 19H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10l2.48-5.788A2 2 0 0 1 6.32 3h11.36a2 2 0 0 1 1.838 1.212L22 10v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Zm1-7H4v5h16v-5ZM4.176 10h15.648l-2.143-5H6.32l-2.144 5ZM6.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill="#41414D"
    />
  </Svg>
)

export default SvgComponent
