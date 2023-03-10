import React, {useCallback, useEffect} from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import CommentItem from '@components/reusable/comment/CommentItem';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {useNavigation} from '@react-navigation/native';
import {CommentListToCommentDetailNavigationProp} from '@src/navigators/types';
import {fetchComments} from '@store/comments';

export interface CommentListProps {
  style?: StyleProp<ViewStyle>;
}

function CommentList({style}: CommentListProps): JSX.Element {
  const {comments, loading, error} = useAppSelector(state => state.comments);
  const navigation = useNavigation<CommentListToCommentDetailNavigationProp>();
  const dispatch = useAppDispatch();

  const onItemPress = useCallback(
    (commentId: number) => {
      navigation.navigate('CommentDetail', {
        commentId: commentId,
      });
    },
    [navigation],
  );

  useEffect(() => {
    dispatch(fetchComments(3));
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

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
