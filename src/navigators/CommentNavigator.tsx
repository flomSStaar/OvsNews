import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommentList from '@components/comment/CommentList';
import CommentScreen from '@src/screens/CommentScreen';

function CommentNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="CommentList" component={CommentList} />
      <Stack.Screen name="CommentDetails" component={CommentScreen} />
    </Stack.Navigator>
  );
}

export default CommentNavigator;
