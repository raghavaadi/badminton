import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated,Easing,Image,ImageBackground,BackHandler,
	TouchableOpacity } from 'react-native';
import ItemComponent from '../components/liveScore';
import Animations from '../components/animate'
import Confetti from 'react-native-confetti';

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
		
		padding: 5,
		marginTop:30,
		marginBottom:10,
	
		color: '#ffffff'
	},item: {},
	btn: {
	  backgroundColor: "#480032",
	  width: 100,
	  height: 40,
	  padding: 3,
	  justifyContent: "center",
	  borderRadius: 6
	},
	text: {
	  fontSize: 20,
	  color: "#fff",
	  fontWeight: "bold",
	  textAlign: "center"
	},
	item1: {
	  backgroundColor: "red",
	  padding: 20,
	  width: 100,
	  margin: 100
	},
  
	textBtn: {
	  color: "#f4f4f4",
	  fontWeight: "bold",
	  textAlign: "center"
	},
	  ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
       marginLeft:160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 32
	},
	center:{
		flex: 1,
		padding: 30,
		marginLeft:100,
		flexDirection: 'column',
		marginTop:180
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
	  },
	  uctransform: {
		textTransform: 'uppercase',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10
	  }
	  
	
});

export default class List extends Component {
	constructor(props) {
        super(props)

		this.ball = new Animated.Value(0)
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
	state = {
		items: [],
		flag: 0
		
		
	};
	moveBall = () => {
		if(this.state.flag===0){
		this.ball.setValue(0)
		}
		else{
			setTimeout(() => {this.setState({timePassed: true})}, 3000)
			this.setState({flag: 0})
			///this._confettiView.stopConfetti();
			//this.ball.setValue(0)
		}
        Animated.timing(this.ball, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true
        }).start(()=>this.moveBall())
    }

	//   animate () {
	// 	this.animatedValue.setValue(0)
	// 	Animated.timing(
	// 	  this.animatedValue,
	// 	  {
	// 		toValue: 1,
	// 		duration: 2000,
	// 		easing: Easing.linear
	// 	  }
	// 	).start(() => this.animate())
	//   }

	
	componentWillUnmount() {
		this.backHandler.remove();
	}
	handleBackButtonClick() {
		this.props.navigation.goBack(null);
		return true;
	}
	componentDidMount() {
		itemsRef.on('value', snapshot => {
			const data = snapshot.val();
			let items = Object.values(data);
			console.log('items da'+JSON.stringify(items))
			this.setState({ items });
			var flag =0 
			console.log(this.state.items)
			var score1=data.First.score
			var score2=data.second.score
			console.log(this.props.navigation.state)
			console.log(score2)
			var score1prev 
			var score2prev 
			if(score1prev===score1 && score2prev===score2){
				flag=0
				this.setState({ flag: 0})
			}
			else{
				score1prev = score1
				 score2prev = score2
				 this._confettiView.startConfetti()
				 this.setState({ flag: 1})

			}
		

		});
		this.moveBall()
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
			//this.goBack(); // works best when the goBack is async
			this.props.navigation.navigate('Home')
			return true;
		  });
		//this.animate()
	}
	render() {
	 
		
		const xVal = this.ball.interpolate({
			inputRange: [0, 10],
			outputRange: [0, 10],
		});
	
		const yVal = this.ball.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [-200, -700, -200]
		})
	
		const animStyle = {
		  transform: [{
			translateY: yVal, translateX: xVal
		  }]
		}
		
		return (
			<View style={styles.main}>
			   <ImageBackground source={require('../../assets/court.jpg')}  style={{width:  '100%', height: '100%'}}>
			   {this.state.items.length > 0 ? (
					<ItemComponent items={this.state.items}  style={styles.uctransform}/>
				) : (
					<Text>No items</Text>
				)}
				</ImageBackground>
                    <Animated.View style={[styles.ball, animStyle]}>
					<Image source={require('../../assets/shuttle.png')} />
					
                    </Animated.View>
					<Confetti ref={(node) => this._confettiView = node}/>
			
					
				
			</View>
		);
	}
}
