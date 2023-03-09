import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

/* -------------------- BottomTabNavigator -------------------- */
export type BottomTabParamList = {
  Posts: undefined;
  Settings: {
    param: number;
  };
  Comments: {
    post: number;
  };
};

/* NavigationProp */

// Posts
type PostsToSettingsNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Settings'
>;

type PostsToCommentsNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Comments'
>;

// Settings
type SettingsToPostsNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Posts'
>;

// Comments
type CommentsToPostsNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Comments'
>;

export type PostsScreenNavigationProp = PostsToCommentsNavigationProp &
  PostsToSettingsNavigationProp;

export type SettingsScreenNavigationProp = SettingsToPostsNavigationProp;

export type CommentsScreenNavigationProp = CommentsToPostsNavigationProp;

/* RouteProp */

// Settings
export type SettingsScreenRouteProp = RouteProp<BottomTabParamList, 'Settings'>;

// Comments
export type CommentsScreenRouteProp = RouteProp<BottomTabParamList, 'Comments'>;
