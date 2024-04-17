/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StackFlow from './src/Navigations/StackNavigation';
import {name as appName} from './app.json';
import Index from './testRedux';
AppRegistry.registerComponent(appName, () => StackFlow);
