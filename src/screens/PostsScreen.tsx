import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';

function PostsScreen({navigation}): JSX.Element {
  const handleGoToSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  return (
    <View>
      <Button title="Settings" onPress={handleGoToSettings} />
      <Text>Posts</Text>
    </View>
  );
}

export default PostsScreen;
