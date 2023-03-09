import React, {useCallback} from 'react';

import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
  ViewProps,
} from 'react-native';
import {Comment} from '@src/model/Comment';
import styled from 'styled-components';

export interface CommentItemProps extends ViewProps {
  comment: Comment;
  onItemPress: ((commentId: number) => void) | undefined;
}

function CommentItem({comment, onItemPress}: CommentItemProps): JSX.Element {
  const handleItemPress = useCallback(() => {
    if (onItemPress) {
      onItemPress(comment.id);
    }
  }, [onItemPress, comment.id]);

  return (
    <TouchableNativeFeedback onPress={handleItemPress}>
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
