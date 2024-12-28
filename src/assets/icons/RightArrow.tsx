import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const RightArrow = props => (
  <Svg
    width={15}
    height={11}
    viewBox="0 0 15 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.62122 5.57143H13.4048M13.4048 5.57143L8.98595 1.15259M13.4048 5.57143L8.98595 9.99026"
      stroke="#3E3E3E"
      strokeWidth={1.32565}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RightArrow;
