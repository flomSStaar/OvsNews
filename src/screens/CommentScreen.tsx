import React, {useCallback, useEffect, useState} from 'react';
import {Button, StyleProp, Text, View, ViewStyle} from 'react-native';
import {Comment} from '@src/model/Comment';
import styled from 'styled-components';
import getOneComment from '@src/services/comments/fetchOne';
import {AxiosError} from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface CommentScreenProps extends NativeStackScreenProps<any> {
  style?: StyleProp<ViewStyle>;
}

function CommentScreen({navigation}: CommentScreenProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [comment, setComment] = useState<Comment>();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    getOneComment(3)
      .then(com => {
        setComment(com);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }

  if (error !== null) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ViewStyled>
      <Button title="Retour" onPress={handleBack} />
      <TitleTextStyled>{comment?.email}</TitleTextStyled>
      <Text>{comment?.body}</Text>
    </ViewStyled>
  );
}

const ViewStyled = styled(View)`
  padding: 16px;
`;

const TitleTextStyled = styled(Text)`
  margin-bottom: 8px;
`;

export default CommentScreen;
