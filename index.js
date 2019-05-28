/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json'; 
import React from "react";
import { Provider } from "react-redux";

import storeConfig from "./src/store/storeConfig";
import axios from "axios";
axios.defaults.baseURL = 'https://lambe-125a6.firebaseio.com/';

const store = storeConfig();
const Redux = () =>{
   return( <Provider store={store}>
                <App />
            </Provider>
        )
} 
AppRegistry.registerComponent(appName, () => Redux);
