import {Animated, Button, Pressable, Text, View, ViewProps} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import CommentList from '@components/comment/CommentList';
import React, {useCallback} from 'react';
import styled from 'styled-components';
import {useAppDispatch} from '@store/hooks';
import {AddCommentPayload} from '@store/comments/payloads/AddCommentPayload';
import {addComment} from '@store/comments';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface HomeProps extends ViewProps, NativeStackScreenProps<any> {}

function Home({navigation, route}: HomeProps): JSX.Element {
  const dispatch = useAppDispatch();

  console.log(route);

  const handleAdd = useCallback(() => {
    const newComment = new AddCommentPayload(
      3,
      'Florent',
      'florent@overscan.com',
      'Nouveau commentaire',
    );
    dispatch(addComment(newComment));
  }, [dispatch]);

  const handleGoToComment = useCallback(() => {
    navigation.navigate('CommentScreen');
  }, [navigation]);

  return (
    <ViewContainerStyled>
      <CustomHeaderStyled title="OvsNews" />
      <ViewMainStyled>
        <PressableStyled onPress={handleGoToComment} />
        <PressableStyled onPress={handleAdd}>
          <Text>Add comment</Text>
        </PressableStyled>
        <CommentListStyled navigation={navigation} route={route} />
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

const CommentListStyled = styled(CommentList)``;

const PressableStyled = styled(Pressable)`
  padding: 8px;
  border: 1px solid black;
  background-color: white;
  color: black;
  margin-bottom: 4px;
`;

export default Home;
