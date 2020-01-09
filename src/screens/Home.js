import React, { Component } from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.main}>
				<Text style={styles.title}>Save score here</Text>
				<Button style={styles.button}
					title="Add an Item"
					onPress={() => this.props.navigation.navigate('AddItem')}
				/>
				<Text style={styles.title}>History of matches here</Text>
				<Button style={styles.button}
					title="List of Items"
					color="green"
					onPress={() => this.props.navigation.navigate('List')}
				/>
				<Text style={styles.title}>View a Live match here</Text>
				<Button style={styles.button}
					title="Live Match"
					color="blue"
					onPress={() => this.props.navigation.navigate('updateScore')}
				/>
				<Text style={styles.title}>Organize a Live Match</Text>
				<Button  style={styles.button}
					title="Create Live Match"
					color="red"
					onPress={() => this.props.navigation.navigate('Create')}
				/>
					<Text style={styles.title}>Enter live match score</Text>
				<Button  style={styles.button}
					title="Enter Live Match Score"
					color="violet"
					onPress={() => this.props.navigation.navigate('enterscore')}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#6565fc'
	},
	title: {
		marginTop: 10,
		fontSize: 25,
		textAlign: 'center'
	},
	itemInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white'
	},
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 25,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});

