import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	AlertIOS
} from 'react-native';

import { db } from '../config';

let addItem = item => {
	console.log('superman'+JSON.stringify(item))
	if(item!==null){
	db.ref('/Live/First').set({
		name: item.first,
		score:''
       
	});
	db.ref('/Live/second').set({
		name: item.second,
		score:''
       
	});
	db.ref('/Live/password').set({
		password:item.password,
	})

}
else {
alert("Enter the value")		
}
};

export default class AddItem extends Component {
	state = {
        first: '',
		second:'',
		password:''
	};

	handleChange = e => {
		this.setState({
			first: e.nativeEvent.text
		});
    };
    handleChanges = e => {
		this.setState({
			second: e.nativeEvent.text
		});
	};
	handleChangess = e => {
		this.setState({
			password: e.nativeEvent.text
		});
	};
	handleSubmit = () => {
		addItem(this.state);
	//	AlertIOS.alert('Item saved successfully');
	if(this.state.first!=='' && this.state.second!==''){
	 this.props.navigation.navigate('updateScore')
	 alert(this.state.first +' vs '+this.state.second)
	console.log(this.state.name+'saved item')
	}
	};

	render() {
		return (
			<View style={styles.main}>
				<Text style={styles.title}>Add Item</Text>
				<TextInput style={styles.itemInput} onChange={this.handleChange} placeholder = "Enter First player Name"  />
                <TextInput style={styles.itemInput} onChange={this.handleChanges} placeholder = "Enter Second player Name" />
				<TextInput style={styles.itemInput} onChange={this.handleChangess} placeholder = "Enter password" />
				<TouchableHighlight
					style={styles.button}
					underlayColor="white"
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>
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
		marginBottom: 20,
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
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});
