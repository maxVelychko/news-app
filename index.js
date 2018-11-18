import * as Expo from 'expo';
import React from 'react';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from "./reducers";
import NewsScreen from "./containers/NewsContainer";
import HomeScreen from "./components/Home";

console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        News: NewsScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);
const AppContainer = createAppContainer(TabNavigator);
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

Expo.registerRootComponent(Root);