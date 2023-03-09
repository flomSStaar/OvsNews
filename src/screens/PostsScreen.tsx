import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PostsScreenNavigationProp} from '@src/navigators/types';

function PostsScreen(): JSX.Element {
  const navigation = useNavigation<PostsScreenNavigationProp>();

  const handleGoToSettings = useCallback(() => {
    navigation.navigate('Settings', {
      param: 3,
    });
  }, [navigation]);

  const handleGoToComments = useCallback(() => {
    navigation.navigate('Comments', {
      post: 6,
    });
  }, [navigation]);

  return (
    <View>
      <Button title="Settings" onPress={handleGoToSettings} />
      <Button title="Comments" onPress={handleGoToComments} />
      <Text>Posts</Text>
    </View>
  );
}

export default PostsScreen;
