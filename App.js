import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';
import Create from './src/screens/Create';
import updateScore from './src/screens/updateScore';
import enterscore from './src/screens/enterscore';

const AppNavigator = createSwitchNavigator(
	{
		Home,
		AddItem,
		List,
		Create,
    updateScore,
    enterscore
    
	},
	{
		initialRouteName: 'Home'
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
