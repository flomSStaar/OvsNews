import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CommentsScreenNavigationProp,
  CommentsScreenRouteProp,
} from '@src/navigators/types';

function CommentsScreen(): JSX.Element {
  const navigation = useNavigation<CommentsScreenNavigationProp>();
  const route = useRoute<CommentsScreenRouteProp>();

  const {post} = route.params;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Text>CommentsScreen</Text>
      <Text>{post}</Text>
      <Button title="Posts" onPress={handleBack} />
    </View>
  );
}

export default CommentsScreen;
