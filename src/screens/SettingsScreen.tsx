import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SettingsScreenNavigationProp,
  SettingsScreenRouteProp,
} from '@src/navigators/types';

function SettingsScreen(): JSX.Element {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const route = useRoute<SettingsScreenRouteProp>();

  const {param} = route.params;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Text>Settings</Text>
      <Text>{param}</Text>
      <Button title="Retour" onPress={handleBack} />
    </View>
  );
}

export default SettingsScreen;
