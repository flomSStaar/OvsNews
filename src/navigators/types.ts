import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/* -------------------- example -------------------- */
/* NavigationProp */
/* RouteProp */

/* -------------------- BottomTabNavigator -------------------- */
export type BottomTabParamList = {
  Posts: undefined;
  Settings: {
    param: number;
  };
  Comments: CommentsNativeStackParamList | undefined;
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

/* -------------------- CommentsStackNavigator -------------------- */

export type CommentsNativeStackParamList = {
  CommentList: undefined;

  CommentDetail: {
    commentId: number;
  };
};

/* NavigationProp */

export type CommentListToCommentDetailNavigationProp = BottomTabNavigationProp<
  CommentsNativeStackParamList,
  'CommentList'
>;

/* RouteProp */

export type CommentDetailScreenRouteProp = RouteProp<
  CommentsNativeStackParamList,
  'CommentDetail'
>;
