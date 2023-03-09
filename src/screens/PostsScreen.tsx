import React, {useCallback} from 'react';
import {
  Button,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
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
    navigation.navigate('Comments');
  }, [navigation]);

  return (
    <SafeAreaView>
      <Pressable style={{backgroundColor: 'blue'}} onPress={handleGoToSettings}>
        <Text>Settings</Text>
      </Pressable>
      <Button title="Comments" onPress={handleGoToComments} />
      <Text>Posts</Text>
    </SafeAreaView>
  );
}

export default PostsScreen;
