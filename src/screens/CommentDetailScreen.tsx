import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CommentDetailScreenRouteProp,
  CommentsScreenNavigationProp,
} from '@src/navigators/types';
import styled from 'styled-components';
import {AxiosError} from 'axios';
import {Comment} from '@src/model/Comment';
import getOneComment from '@src/services/comments/fetchOne';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CommentDetailScreen = () => {
  const navigation = useNavigation<CommentsScreenNavigationProp>();
  const route = useRoute<CommentDetailScreenRouteProp>();
  const {commentId} = useMemo(() => route.params, [route.params]);

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [comment, setComment] = useState<Comment>();

  const handlePress = useCallback(() => {
    navigation.navigate('Settings', {param: 188 + commentId});
  }, [commentId, navigation]);

  useEffect(() => {
    getOneComment(commentId)
      .then(com => {
        setComment(com);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [commentId]);

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }

  if (error !== null) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ContainerViewStyled>
      <TitleTextStyled>Comment</TitleTextStyled>
      <CommentViewStyled>
        <CommentTitleTextStyled>{comment?.email}</CommentTitleTextStyled>
        <Text>{comment?.body}</Text>
        <Text>{comment?.id}</Text>
      </CommentViewStyled>
      <PressableStyled
        style={({pressed}) => pressed && styles.pressablePressed}
        onPress={handlePress}>
        <Text>Go to settings</Text>
      </PressableStyled>
    </ContainerViewStyled>
  );
};

const ContainerViewStyled = styled(View)`
  padding: 16px;
`;

const TitleTextStyled = styled(Text)`
  font-size: 32px;
`;

const CommentViewStyled = styled(View)`
  border: 1px solid darkgray;
  border-radius: 8px;
  margin-top: 16px;
  padding: 8px;
`;

const CommentTitleTextStyled = styled(Text)`
  margin-bottom: 8px;
  font-size: 20px;
`;

const PressableStyled = styled(Pressable)`
  padding: 8px;
  border: 1px solid ${Colors.primary};
  border-radius: 8px;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  pressablePressed: {
    backgroundColor: 'gray',
  },
});

export default CommentDetailScreen;
