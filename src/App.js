import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import BottomTabs from './components/BottomTabs';

const App = () => (  
    <Provider store={store}>
      <BottomTabs />
    </Provider>    
)

export default App;