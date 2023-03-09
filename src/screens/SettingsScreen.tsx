import React, {useCallback} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
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
    <SafeAreaView>
      <Text>Settings</Text>
      <Text>{param}</Text>
      <Button title="Retour" onPress={handleBack} />
    </SafeAreaView>
  );
}

export default SettingsScreen;
