import React from 'react';

import {Text, View} from 'react-native';
import {Comment} from '@src/model/Comment';

export interface CommentItemProps {
  comment: Comment;
}

function CommentItem({comment}: CommentItemProps): JSX.Element {
  return (
    <View>
      <Text>{comment.name}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
}

export default CommentItem;
