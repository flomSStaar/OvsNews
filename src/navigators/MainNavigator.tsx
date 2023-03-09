import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PostsScreen from '@src/screens/PostsScreen';
import SettingsScreen from '@src/screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@src/navigators/types';
import CommentsScreen from '@src/screens/CommentsScreen';

function MainNavigator(): JSX.Element {
  const BottomTabNavigator = createBottomTabNavigator<BottomTabParamList>();

  return (
    <BottomTabNavigator.Navigator
      initialRouteName="Posts"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Posts') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Comments') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
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
        initialParams={{
          param: 10,
        }}
      />
      <BottomTabNavigator.Screen
        name="Comments"
        component={CommentsScreen}
        initialParams={{
          post: 18,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

export default MainNavigator;
