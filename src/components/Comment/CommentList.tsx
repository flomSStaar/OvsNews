import React from 'react';

import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@src/store';
import CommentItem from '@components/Comment/CommentItem';

export interface CommentListProps {}

function CommentList(props: CommentListProps): JSX.Element {
  const comments = useSelector((state: RootState) => state.comments);

  return (
    <FlatList
      data={comments}
      renderItem={({item}) => (
        <CommentItem key={item.id.toString()} comment={item} />
      )}
    />
  );
}

export default CommentList;
