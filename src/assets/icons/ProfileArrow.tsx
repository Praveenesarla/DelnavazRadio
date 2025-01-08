import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileArrow = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      stroke="#1B1F26"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileArrow;
