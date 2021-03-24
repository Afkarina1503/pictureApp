/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import login from'./src/login';
import home from './src/home';
import list from './src/list';
import Contact from'./src/Contact';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
