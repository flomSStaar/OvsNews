import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import styled from 'styled-components';
import {PersistGate} from 'redux-persist/integration/react';
import store from '@src/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostsScreen from '@src/screens/PostsScreen';
import SettingsScreen from '@src/screens/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyled = styled(SafeAreaView)`
    background-color: ${isDarkMode ? Colors.darker : Colors.lighter};
  `;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const BottomTabNavigator = createBottomTabNavigator();

  return (
    <Provider store={store.store}>
      <PersistGate
        persistor={store.persistor}
        loading={<Text>Loading...</Text>}>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <BottomTabNavigator.Navigator
            initialRouteName="Posts"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName: string = '';

                if (route.name === 'Posts') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Icon name={iconName} color={color} size={size} />;
              },
              tabBarActiveTintColor: Colors.primary,
              tabBarInactiveTintColor: 'gray',
            })}>
            <BottomTabNavigator.Screen
              name="Posts"
              component={PostsScreen}
              options={{tabBarBadge: 3}}
            />
            <BottomTabNavigator.Screen
              name="Settings"
              component={SettingsScreen}
            />
          </BottomTabNavigator.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
