import React, {useCallback} from 'react';

import {Button, FlatList, StyleProp, Text, View, ViewStyle} from 'react-native';
import CommentItem from '@components/comment/CommentItem';
import {useAppSelector} from '@store/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface CommentListProps extends NativeStackScreenProps<any> {
  style?: StyleProp<ViewStyle>;
}

function CommentList({style, navigation}: CommentListProps): JSX.Element {
  const comments = useAppSelector(state => state.comments);

  const handlePress = useCallback(() => {
    navigation.navigate('CommentDetails');
  }, [navigation]);

  return (
    <View>
      <Button title="Aller au commentaire" onPress={handlePress} />
      <FlatList
        style={style}
        data={comments}
        ListEmptyComponent={<Text>Aucun commentaire</Text>}
        renderItem={({item}) => (
          <CommentItem key={item.id.toString()} comment={item} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default CommentList;
