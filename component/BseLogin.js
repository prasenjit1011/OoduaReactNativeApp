import React, {useState, createRef} from 'react';
import { ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, TouchableOpacity, ActivityIndicator } from "react-native";
import { useKeyboard } from '@react-native-community/hooks';
import appstyle from './appstyle';


// import statusCodes along with GoogleSignin
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
	scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
	webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
	offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
	hostedDomain: '', // specifies a hosted domain restriction
	forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
	accountName: '', // [Android] specifies an account name on the device that should be used
	iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
	googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
	openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
	profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

// Somewhere in your code
signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

getCurrentUserInfo = async () => {
	try {
	  const userInfo = await GoogleSignin.signInSilently();
	  this.setState({ userInfo });
	} catch (error) {
	  if (error.code === statusCodes.SIGN_IN_REQUIRED) {
		// user has not signed in yet
	  } else {
		// some other error
	  }
	}
  };

  isSignedIn = async () => {
	const isSignedIn = await GoogleSignin.isSignedIn();
	this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  getCurrentUser = async () => {
	const currentUser = await GoogleSignin.getCurrentUser();
	this.setState({ currentUser });
  };











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
		<GoogleSigninButton
			style={{ width: 192, height: 48 }}
			size={GoogleSigninButton.Size.Wide}
			color={GoogleSigninButton.Color.Dark}
			onPress={this._signIn}
			//disabled={this.state.isSigninInProgress}
		/>
	);


    return (
        <ImageBackground source={image} style={appstyle.container} >
			<View style={{ flex: 17 }}>
				<Image  source={logo} style={appstyle.reglogo} />
			</View>

			<View>
				<GoogleSigninButton
					style={{ width: 192, height: 48 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={this._signIn}
					//disabled={this.state.isSigninInProgress}
				/>;
			</View>

			<View style={appstyle.loginFrmContainer}>
				<TouchableOpacity style={[appstyle.loginBtn, {flexDirection:'row'}]} onPress={() => doSignup()}>
					<Text style={appstyle.loginBtnTxt}>Login</Text>
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