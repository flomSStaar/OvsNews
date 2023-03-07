import React, {useCallback} from 'react';

import {Text, TouchableNativeFeedback, View, ViewProps} from 'react-native';
import {Comment} from '@src/model/Comment';
import styled from 'styled-components';
import {useAppDispatch} from '@store/hooks';
import {deleteComment} from '@store/comments';

export interface CommentItemProps extends ViewProps {
  comment: Comment;
}

function CommentItem({comment}: CommentItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlePress = useCallback(() => {
    dispatch(deleteComment(comment.id));
  }, [comment.id, dispatch]);

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <ContainerViewStyled>
        <TitleTextStyled>{comment.name}</TitleTextStyled>
        <TextStyled>{comment.body}</TextStyled>
      </ContainerViewStyled>
    </TouchableNativeFeedback>
  );
}

const ContainerViewStyled = styled(View)`
  padding: 8px;
  border-radius: 8px;
  background-color: grey;
  margin: 5px 0;
`;

const TitleTextStyled = styled(Text)`
  color: white;
  font-size: 20px;
`;

const TextStyled = styled(Text)`
  color: white;
`;

export default CommentItem;
