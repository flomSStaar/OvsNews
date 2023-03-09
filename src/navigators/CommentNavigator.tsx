import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommentDetailScreen from '@src/screens/CommentDetailScreen';
import CommentsScreen from '@src/screens/CommentsScreen';
import {CommentsNativeStackParamList} from '@src/navigators/types';

function CommentNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator<CommentsNativeStackParamList>();

  return (
    <Stack.Navigator initialRouteName="CommentList">
      <Stack.Screen name="CommentList" component={CommentsScreen} />
      <Stack.Screen name="CommentDetail" component={CommentDetailScreen} />
    </Stack.Navigator>
  );
}

export default CommentNavigator;
