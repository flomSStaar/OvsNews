import {Animated, Button, Pressable, Text, View, ViewProps} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import CommentList from '@components/comment/CommentList';
import React, {useCallback} from 'react';
import styled from 'styled-components';
import {useAppDispatch} from '@store/hooks';
import {AddCommentPayload} from '@store/comments/payloads/AddCommentPayload';
import {addComment} from '@store/comments';
import ScrollView = Animated.ScrollView;

export interface HomeProps extends ViewProps {}

function Home(props: HomeProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAdd = useCallback(() => {
    const newComment = new AddCommentPayload(
      3,
      'Florent',
      'florent@overscan.com',
      'Nouveau commentaire',
    );
    dispatch(addComment(newComment));
  }, [dispatch]);

  return (
    <ViewContainerStyled>
      <CustomHeaderStyled title="OvsNews" />
      <ViewMainStyled>
        <PressableStyled onPress={handleAdd}>
          <Text>Add comment</Text>
        </PressableStyled>
        <CommentListStyled />
      </ViewMainStyled>
    </ViewContainerStyled>
  );
}

const ViewContainerStyled = styled(View)`
  background-color: red;
`;

const ViewMainStyled = styled(View)`
  padding: 8px;
  background-color: yellow;
`;

const CustomHeaderStyled = styled(CustomHeader)`
  background-color: blue;
  padding: 8px;
`;

const CommentListStyled = styled(CommentList)`
`;

const PressableStyled = styled(Pressable)`
  padding: 8px;
  border: 1px solid black;
  background-color: white;
  color: black;
  margin-bottom: 4px;
`;

export default Home;
