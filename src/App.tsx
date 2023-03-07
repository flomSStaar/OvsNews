import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '@components/CustomHeader';
import {Provider} from 'react-redux';
import {store} from '@src/store';
import CommentList from '@components/Comment/CommentList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <CustomHeader title="OvsNews" />
        <CommentList />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
