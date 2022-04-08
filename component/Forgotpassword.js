import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, TouchableOpacity, ActivityIndicator } from "react-native";
import appstyle from './appstyle';
import { useKeyboard } from '@react-native-community/hooks'

const Screen = ({ navigation }) => {
    const image = require('./../images/login.png');
	const [username, onChangeUsername] = React.useState("test@cargo.com");
	const email = require('./../images/email01.png');
	

	const [isLoading, setLoading] = React.useState(false);
	const doSignup = async () => {
		setLoading(true);
		await asyncSignupFunction();
		setLoading(false);
	};
	
    return (
        <ImageBackground source={image} style={appstyle.container} >
			<View style={{ flex: 17 }}>
				<Image  source={logo} style={appstyle.reglogo} />
			</View>

			<View style={{ flex: 8, padding:"5%"  }}>
				<View style={appstyle.sectionStyle}>
					<Image
						source={email}
						style={appstyle.imageStyle}
					/>
					<TextInput
						style={appstyle.inpField}
						placeholder="Enter Your Name Here"
						underlineColorAndroid="transparent"
						onChangeText={onChangeUsername}
						value={username}
					/>
				</View>
				
                <Pressable style={appstyle.loginBtn} onPress={() => navigation.navigate('Booking', { name: 'Jane' })}>
					<Text style={appstyle.text}>Reset Password</Text>
				</Pressable>
			</View>
            <View style={appstyle.loginBottomTxt}>
                <Text style={appstyle.createAccount} onPress={() => navigation.navigate('Login')}>Back To Login Page</Text>
				<View style={appstyle.bottomHrCreateAcc} />
            </View>
        </ImageBackground>
    );
};

const logo 	= require('./../images/logo.png');
//import GrPoint from './GrPoint';

const asyncSignupFunction = () => {
	return true;
}

const LoadScreen = ({ navigation }) => {
    const image = require('./../images/login.png');
	const [username, onChangeUsername] = React.useState("test@cargo.com");
	const email = require('./../images/email01.png');
	

	const [isLoading, setLoading] = React.useState(false);
	const doSignup = async () => {
		setLoading(true);

		setTimeout(function () {
			setLoading(false);
			navigation.navigate('Login')
		}, 2000);
		
	};
	
    return (
        <ImageBackground source={image} style={appstyle.container} >
			<View style={{ flex: 17 }}>
				<Image  source={logo} style={appstyle.reglogo} />
			</View>

			<View style={{ flex: 8, padding:"5%"  }}>
				<View style={appstyle.sectionStyle}>
					<Image
						source={email}
						style={appstyle.imageStyle}
					/>
					<TextInput
						style={appstyle.inpField}
						placeholder="Enter Your Name Here"
						underlineColorAndroid="transparent"
						onChangeText={onChangeUsername}
						value={username}
					/>
				</View>
				<TouchableOpacity style={[appstyle.loginBtn, {flexDirection:'row'}]} onPress={() => doSignup()}>
					<Text style={appstyle.loginBtnTxt}>Reset Password</Text>
					<ActivityIndicator animating={isLoading} style={{borderColor:'#FFF', shadowColor:'#FFF'}} />
				</TouchableOpacity>
			</View>
            <View style={appstyle.loginBottomTxt}>

                <Text style={appstyle.createAccount} onPress={() => navigation.navigate('Login')}>Back To Login Page</Text>

				<View style={appstyle.bottomHrCreateAcc} />
            </View>
        </ImageBackground>
    );
};


export default LoadScreen;