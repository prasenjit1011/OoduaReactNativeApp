import React, {useState, createRef} from 'react';
import { ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, TouchableOpacity, ActivityIndicator } from "react-native";
import { useKeyboard } from '@react-native-community/hooks';
import appstyle from './appstyle';

const Screen = ({ navigation }) => {
    const image = require('./../images/login.png');
	const [msg, setErrortext] = React.useState('');
	const [username, onChangeUsername] = React.useState("test@cargo.com");
	const [pwd, onChangePwd] = React.useState("Password");
	const email = require('./../images/email01.png');
	const avatar = require('./../images/avatar.png');
	const lock = require('./../images/lock01.png');
	const [isLoading, setLoading] = React.useState(false);
	
	

	const passwordInputRef = createRef();

	const doSignup = () => {
		console.log('----------');
		setErrortext('');
		if (!username) {
			setErrortext('Please Fill Email Id');
			return;
		}
		if (!pwd) {
			setErrortext('Please Fill Password');
			return;
		}
console.log('=======');
	  
	  setLoading(true);
	  //let dataToSend = {email: username, password: pwd};
	  let dataToSend = {email: username, password: pwd, name: username, "gender":"male", "status":"active"};
	  let formBody = [];
	  for (let key in dataToSend) {
		let encodedKey = encodeURIComponent(key);
		let encodedValue = encodeURIComponent(dataToSend[key]);
		formBody.push(encodedKey + '=' + encodedValue);
	  }
	  formBody = formBody.join('&');
  
	  
	  fetch('https://gorest.co.in/public/v2/users',{
		method: 'POST',
		body: formBody,
		headers: {
		  //Header Defination
		  'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
		  'Authorization':'Bearer f85126705d13453e57a54145c34c53e904ac8c78c1d4360ff14d002e1341dc49'
		},
	  })
		.then((response) => response.json())
		.then((responseJson) => {
		  //Hide Loader
		  setLoading(false);
		  console.log(444,responseJson);

		setTimeout(function () {
			setLoading(false);
			navigation.navigate('Booking')
		}, 20);

		 /* 
		  // If server response message same as Data Matched
		  if (responseJson.status === 'success') {
			AsyncStorage.setItem('user_id', responseJson.data.email);
			console.log(responseJson.data.email);
			navigation.replace('DrawerNavigationRoutes');
		  } else {
			setErrortext(responseJson.msg);
			console.log('Please check your email id or password');
		  }
		  */

		})
		.catch((error) => {
		  //Hide Loader
		  setLoading(false);
		  console.error(222,error);
		});
	};



	
	const doSignupOrg = async () => {
		setLoading(true);
		setTimeout(function () {
			setLoading(false);
			navigation.navigate('Booking')
		}, 200);
		
	};


	const keyboard = useKeyboard()
	var logoHeight = 4;
	if(keyboard.keyboardShown){
		logoHeight = 8;
	}

    return (
        <ImageBackground source={image} style={appstyle.container} >
			<View style={{ flex: 17 }}>
				<Image  source={logo} style={appstyle.reglogo} />
			</View>

			<View style={appstyle.loginFrmContainer}>
				{(keyboard.keyboardShown)?<></>:<Text style={appstyle.txtMsg}>{msg}</Text>}
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
				<View style={appstyle.sectionStyle}>
					<Image
						source={lock}
						style={appstyle.imageStyle}
					/>
					<TextInput
						style={appstyle.inpField}
						secureTextEntry={true}
						placeholder="Enter Your Name Here"
						underlineColorAndroid="transparent"
						onChangeText={onChangePwd}
						value={pwd}
					/>
				</View>
                <Text style={appstyle.forgotPassword} onPress={() => navigation.navigate('Forgotpassword', { name: 'Jane' })}>Forgot Password?</Text>
				<TouchableOpacity style={[appstyle.loginBtn, {flexDirection:'row'}]} onPress={() => doSignup()}>
					<Text style={appstyle.loginBtnTxt}>Login btn</Text>
					<ActivityIndicator animating={isLoading} style={{borderColor:'#FFF', shadowColor:'#FFF'}} />
				</TouchableOpacity>
			</View>

			{(keyboard.keyboardShown)?<></>:
            <View style={appstyle.loginBottomTxt}>
                <Text style={appstyle.createAccount} onPress={() => navigation.navigate('CreateAccount')}>Create New Account</Text>
				<View style={appstyle.bottomHrCreateAcc} />
			</View>
			}
        </ImageBackground>
    );
};

const logo 	= require('./../images/logo.png');


export default Screen;