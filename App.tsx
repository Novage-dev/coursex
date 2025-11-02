import 'react-native-gesture-handler';
import React from 'react';

import { DataProvider } from './src/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './src/navigation/App';

export default function App() {
  return (
    <GestureHandlerRootView>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
    </GestureHandlerRootView>

  );
}
