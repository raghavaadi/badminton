import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	render() {
		return (
			<View style={styles.itemsList}>
				{this.props.items.map((item, index) => {
					return (
						<View key={index}>
							<Text style={styles.itemtext}>{item.name}</Text>
					
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemsList: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#29292e',
		color: '#ffffff'
	},
	itemtext: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});
