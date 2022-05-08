import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (


  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 23.833c5.105 0 9.571 2.025 12 5.047L25.432 30c-1.977-2.16-5.463-3.595-9.433-3.595-3.97 0-7.455 1.435-9.432 3.595L4 28.879c2.429-3.022 6.893-5.046 12-5.046ZM16 2c1.848 0 3.622.677 4.929 1.883C22.236 5.09 22.97 6.724 22.97 8.43v6.403c0 1.657-.694 3.25-1.936 4.446-1.243 1.197-2.938 1.905-4.733 1.977l-.303.006c-1.849 0-3.622-.677-4.93-1.883-1.307-1.205-2.041-2.84-2.041-4.546V8.43c0-1.657.694-3.25 1.936-4.446 1.242-1.197 2.938-1.905 4.733-1.977L15.999 2Zm0 2.572a4.38 4.38 0 0 0-2.87 1.05c-.777.676-1.244 1.599-1.307 2.58l-.007.227v6.403c0 1.004.423 1.97 1.181 2.69s1.791 1.14 2.88 1.17a4.393 4.393 0 0 0 2.949-1.012c.802-.679 1.286-1.619 1.35-2.621l.006-.227V8.43c0-1.023-.44-2.004-1.225-2.727-.784-.724-1.848-1.13-2.958-1.13Z"
      fill="#47474D"
    />
  </Svg>
)


const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;