import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
//import Fpp from './Fpp';
//import Profile from './pages/Profile';
//import App from './Mtab';


const Rpp = () => {
	const [fname,setFname] 			= React.useState(false);
	const [fbname,setFBname] 		= React.useState(false);
	const [imgsrc,setImgsrc] 		= React.useState(false);
	const [fbimgsrc,setFbImgsrc] 	= React.useState(false);
	const logoImgSrc			 	= 'https://i.natgeofe.com/n/fa601d36-f382-420c-85b9-a2d710317923/Minden_00114271_2_3x2.jpg';
	
	
	useEffect(() => {
		GoogleSignin.configure();
	},[]);

	const fbLogin = (resCallback) => {
		LoginManager.logOut();
		return LoginManager.logInWithPermissions(['email','public_profile']).then(
			result => {
				console.log(result);
				if(result.declinedPermissions && result.declinedPermissions.includes("email")){
					resCallback({message:"Email required"});
				}
				if(result.isCancelled){
					console.log("Error");
				}
				else{
					const infoRequest = new GraphRequest(
						'/me?fields=email,name,picture',
						null,
						resCallback
					);
					new GraphRequestManager().addRequest(infoRequest).start()
				}
			},
			function (error){
				console.log("Login fail with error : " + error)
			}
		)
	}

	const onFbLogin = async() => {
		try{
			await fbLogin(_responseInfoCallBack);
		}
		catch(error){
			console.log("Login fail with error : " + error);
		}
	}

	const _responseInfoCallBack = async(error, result) => {
		if(error){
			console.log("Login fail with error : " + error);
			return;
		}
		else{
			const userData = result;
			setFBname(userData.name);
			setFbImgsrc(userData.picture.data.url);
			console.log(userData.name);
			console.log(userData.picture.data.url);
			console.log(userData);
		}
	}

	const onFbLogout = () => {
		setFBname(false);
		setFbImgsrc(false);
	}


	const googleSignIn = async () => {
		setFname(false);
		setImgsrc(false);
	  try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		console.log('-----------------------------------------------------');
		setFname(userInfo.user.name);
		if(userInfo.user.photo != null){
			setImgsrc(userInfo.user.photo);
		}
		console.log(userInfo);
		
	  } catch (error) {
		  console.log(error);
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


	/*if(fbname != false){
		return (
			<App username={fbname} userpic={fbimgsrc} />
		)
	}
	else if(fname != false){
		return (
			<App username={fname} userpic={imgsrc} />
		)
	}*/

	return (
		<View style={styles.screen} >
			<ImageBackground source={require('./images/img01.jpg')} style={styles.bgImgScreen} >
				<Image source={require('./images/logoImg.jpg')} style={styles.logoImg} />
			
				<View style={styles.screenbg} >
					{fbname != false ? <Text>Welcome To FB : {fbname}</Text> : null}
					{
						fbimgsrc != false ? <Image source={{ uri: fbimgsrc }} style={{ width: 50, height: 50 }} /> : null
					}
					{
						fbname != false ? 
								<TouchableOpacity onPress={onFbLogout}><Text style={styles.fbtn} >Fb Logout</Text></TouchableOpacity>
							:	<TouchableOpacity onPress={onFbLogin}><Text style={styles.fbtn} >Fb Login</Text></TouchableOpacity>
					}
					

					{fname != false ? <Text>Welcome To Google : {fname}</Text> : null}
					{imgsrc != false ? <Image source={{ uri: imgsrc }} style={{ width: 150, height: 150 }} /> : null}
					{
						fname != false ?  
								<TouchableOpacity onPress={googleSignOut}><Text style={styles.gbtn} >Google SignOut</Text></TouchableOpacity> 
							: 	<TouchableOpacity onPress={googleSignIn}><Text style={styles.gbtn} >Google SignIn</Text></TouchableOpacity>
					}
				</View>
			</ImageBackground>
		</View>
	);

}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1, justifyContent: 'center', alignItems: 'center', width: null, height: null
	},	
	screen:{
		 padding:0, justifyContent: 'center', alignItems: 'center'
	},
	screenbg:{
		 width:'100%', padding:0, justifyContent: 'center', alignItems: 'center' 
	},
	bgImgScreen:{
		width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'
	},
	logoImg:{
		width: 150, height: 150, margin: 0,  padding:0
	},
	fbtn:{
		color: "#FFF", backgroundColor:"#007", fontSize: 20, margin: 10, padding: 10, textAlign: "center"
	},
	gbtn:{
		color: "#FFF", backgroundColor:"#F07", fontSize: 20, margin: 10, padding: 10, textAlign: "center"
	}
});

export default Rpp;