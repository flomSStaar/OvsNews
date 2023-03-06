import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

interface CustomHeaderProps extends PropsWithChildren {
  title: string;
}

function CustomHeader({title}: CustomHeaderProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default CustomHeader;
