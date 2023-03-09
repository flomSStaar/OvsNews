import React, {useCallback} from 'react';

import {FlatList, StyleProp, Text, ViewStyle} from 'react-native';
import CommentItem from '@components/reusable/comment/CommentItem';
import {useAppSelector} from '@store/hooks';
import {useNavigation} from '@react-navigation/native';
import {CommentListToCommentDetailNavigationProp} from '@src/navigators/types';

export interface CommentListProps {
  style?: StyleProp<ViewStyle>;
}

function CommentList({style}: CommentListProps): JSX.Element {
  const comments = useAppSelector(state => state.comments);
  const navigation = useNavigation<CommentListToCommentDetailNavigationProp>();

  const onItemPress = useCallback(
    (commentId: number) => {
      navigation.navigate('CommentDetail', {
        commentId: commentId,
      });
    },
    [navigation],
  );

  return (
    <FlatList
      style={style}
      data={comments}
      ListEmptyComponent={<Text>Aucun commentaire</Text>}
      renderItem={({item}) => (
        <CommentItem
          key={item.id.toString()}
          comment={item}
          onItemPress={onItemPress}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default CommentList;
