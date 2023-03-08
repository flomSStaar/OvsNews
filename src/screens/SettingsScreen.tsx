import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';

function SettingsScreen({navigation}): JSX.Element {
  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Retour" onPress={handleBack} />
    </View>
  );
}

export default SettingsScreen;
