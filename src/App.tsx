import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import Home from '@src/screens/Home';
import styled from 'styled-components';
import {PersistGate} from 'redux-persist/integration/react';
import store from '@src/store';
import CommentScreen from '@src/screens/CommentScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyled = styled(SafeAreaView)`
    background-color: ${isDarkMode ? Colors.darker : Colors.lighter};
  `;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store.store}>
      <PersistGate
        persistor={store.persistor}
        loading={<Text>Loading...</Text>}>
        <SafeAreaViewStyled>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {/*<Home />*/}
          <CommentScreen />
        </SafeAreaViewStyled>
      </PersistGate>
    </Provider>
  );
}

export default App;
