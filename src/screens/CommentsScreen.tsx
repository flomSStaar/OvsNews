import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import CommentList from '@components/reusable/comment/CommentList';
import {useNavigation} from '@react-navigation/native';
import {CommentsScreenNavigationProp} from '@src/navigators/types';

function CommentsScreen(): JSX.Element {
  const navigation = useNavigation<CommentsScreenNavigationProp>();

  const handlePress = useCallback(() => {
    navigation.navigate('Settings', {
      param: 15,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>CommentsScreen</Text>
      <Pressable onPress={handlePress}>
        <Text>Go to settings</Text>
      </Pressable>
      <CommentList />
    </SafeAreaView>
  );
}

export default CommentsScreen;
