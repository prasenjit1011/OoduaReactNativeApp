import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import StockList from './StockList';
import appstyle from '../appstyle';

const BseLogin = ({ navigation, props }) => {
	const [fname,setFname] 			= React.useState(false);
	const [fbname,setFBname] 		= React.useState(false);
	const [imgsrc,setImgsrc] 		= React.useState(false);
	const [fbimgsrc,setFbImgsrc] 	= React.useState(false);
	const logoImgSrc			 	= 'https://i.natgeofe.com/n/fa601d36-f382-420c-85b9-a2d710317923/Minden_00114271_2_3x2.jpg';

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      //webClientId: '441174880458-6pkn1ni0ak00j7fhh8lq17cg75jtqlnm.apps.googleusercontent.com',
	  //webClientId: '354177879255-v67haqifmrqiumlquaijukdvnqh60rmj.apps.googleusercontent.com',
    });
    // Check if user is already signed in
    //_isSignedIn();
  }, []);


  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (
          error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
        ) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null); 
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  
  







	const googleSignIn = async () => {
		setFname(false);
		setImgsrc(false);
		console.log('---here---');
	  try {
		console.log('======here======')
		
		await GoogleSignin.hasPlayServices();
		console.log('***************************')
		const userInfo = await GoogleSignin.signIn();
		console.log('-----------------------------------------------------');
		console.log(userInfo.user.name);
		console.log(userInfo.user);
		
		/*setFname(userInfo.user.name);
		if(userInfo.user.photo != null){
			setImgsrc(userInfo.user.photo);
		}
		console.log(userInfo);
		*/
	  } catch (error) {
		  console.log("Error");
		  console.log(error);
		/*if (error.code === statusCodes.SIGN_IN_CANCELLED) {
		  // user cancelled the login flow
		  
		} else if (error.code === statusCodes.IN_PROGRESS) {
		  // operation (e.g. sign in) is in progress already
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
		  // play services not available or outdated
		} else {
		  // some other error happened
		}*/
	  }
	};

	const googleSignOut = async () => {
		setFname(false);
		setImgsrc(false);
	  try {
		await GoogleSignin.revokeAccess();
		await GoogleSignin.signOut();
		//this.setState({ user: null }); // Remember to remove the user from your app's state as well
		
	  } catch (error) {
		console.error(error);
	  }
	};


	return (
		<View style={styles.screen} >
			<ImageBackground source={require('../../images/blue5.jpg')} style={appstyle.bgImgScreen} >
				<Image source={require('../../images/nifty.png')} style={appstyle.logoSmallImg} />
				<TouchableOpacity onPress={googleSignIn}><Text style={appstyle.gbtn} >Google SignIn</Text></TouchableOpacity>
				<StockList />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1, justifyContent: 'center', alignItems: 'center', width: null, height: null
	},	
	screen:{
		 padding:0, /*justifyContent: 'center', alignItems: 'center'*/
	},
	screenbg:{
		 width:'100%', padding:0, justifyContent: 'left', alignItems: 'left' 
	},



});

export default BseLogin;  