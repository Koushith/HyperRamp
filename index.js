/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import App from './App';
import { name as appName } from './app.json';

import { store } from './src/store/store';

AppRegistry.registerComponent(appName, () => (
    <Provider store={store}>
        <App />
    </Provider>
));
