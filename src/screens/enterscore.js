import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/Live');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	},
	main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#29292e',
		color: '#ffffff'
	}
});

export default class List extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			console.log('items da'+JSON.stringify(items))
			this.setState({ items });
			console.log(this.state.items)
		});
	}

	render() {
		return (
			<View style={styles.main}>
				{this.state.items.length > 0 ? (
					<ItemComponent items={this.state.items}/>
				) : (
					<Text>No items</Text>
				)}
			</View>
		);
	}
}
