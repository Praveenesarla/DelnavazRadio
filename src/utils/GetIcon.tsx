import {Image} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';

interface GetIconProps {
  name:
    | 'home-solid'
    | 'home-outline'
    | 'category-solid'
    | 'category-outline'
    | 'streaming-solid'
    | 'streaming-outline'
    | 'profile-solid'
    | 'profile-outline'
    | 'schedule-outline'
    | 'schedule-solid';
}

const GetIcon: React.FC<GetIconProps> = ({name}) => {
  const renderImage = () => {
    switch (name) {
      case 'home-solid':
        return require('../assets/tabIcons/solid/home-solid.png');
      case 'schedule-outline':
        return require('../assets/tabIcons/outline/event.png');
      case 'schedule-solid':
        return require('../assets/tabIcons/outline/event.png');
      case 'home-outline':
        return require('../assets/tabIcons/outline/home-outline.png');
      case 'category-solid':
        return require('../assets/tabIcons/solid/category-solid.png');
      case 'category-outline':
        return require('../assets/tabIcons/outline/categories-outline.png');
      case 'streaming-solid':
        return require('../assets/tabIcons/outline/straming-outline.png');
      case 'streaming-outline':
        return require('../assets/tabIcons/outline/straming-outline.png');
      case 'profile-solid':
        return require('../assets/tabIcons/solid/profile.png');
      case 'profile-outline':
        return require('../assets/tabIcons/outline/profile-outline.png');
    }
  };
  return (
    <Image
      source={renderImage()}
      style={{
        width: s(20),
        height: vs(20),
        tintColor: name === 'schedule - solid' ? 'brown' : undefined, // Use ternary operator
      }}
    />
  );
};

export default GetIcon;
