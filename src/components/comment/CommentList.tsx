import React from 'react';

import {FlatList, StyleProp, Text, ViewStyle} from 'react-native';
import CommentItem from '@components/comment/CommentItem';
import {useAppSelector} from '@store/hooks';

export interface CommentListProps {
  style?: StyleProp<ViewStyle>;
}

function CommentList({style}: CommentListProps): JSX.Element {
  const comments = useAppSelector(state => state.comments);

  return (
    <FlatList
      style={style}
      data={comments}
      ListEmptyComponent={<Text>Aucun commentaire</Text>}
      renderItem={({item}) => (
        <CommentItem key={item.id.toString()} comment={item} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default CommentList;
