/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
console.disableYellowBox = true;

import BseLogin from './google/Gpp';
import Login from './Login';
import Booking from './Booking';
import CreateAccount from './CreateAcc';
import Forgotpassword from './Forgotpassword';
import appstyle from './appstyle';
const appicon 		= require('./../images/appicon.png');
const loginBgImg 	= require('./../images/login.png');

//const BseLogin = ({ navigation }) => {return (<Text>PPP</Text>);}

/*
<DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
<DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
*/
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}



/*
<Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false,  animation:"slide_from_left", }} />
<Drawer.Screen name="Contactus" component={Contactus} options={{ headerShown: false,  animation:"slide_from_left", }} />
*/
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function UserDrawer() {
  return (
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MyBooking" component={Booking} options={{ headerShown: false,  animation:"slide_from_left", drawerIcon: ({ focused, size }) => (<Image source={require('../images/logo2.png')} style={[ { height: 50, width: 200 }]} />)}} />  
      <Drawer.Screen name="Booking" component={Booking} options={{ headerShown: false,  animation:"slide_from_left", }} />  
      <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false,  animation:"slide_from_left", }} />
    </Drawer.Navigator>
  );
}

const App = () => {
	useEffect(()=>{ SplashScreen.hide() },[]);
  
  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="BseLogin" component={BseLogin} options={{ headerShown: false,  animation:"slide_from_left",}}  />
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false,  animation:"slide_from_left",}}  />
				<Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false,  animation:"slide_from_left", }} />
				<Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ headerShown: false,  animation:"slide_from_left", }} />
				<Stack.Screen name="Booking" component={UserDrawer} options={{ headerShown: false,  animation:"slide_from_left", }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#0BB' }}>
	
	  
      <Text style={{color:'#FFF', fontSize:20}}>My Profile Screen</Text>
	  <Button onPress={() => navigation.openDrawer()} title="Open" />
    </View>
  );
}

function Contactus({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#748' }}>
      <Text style={{color:'#FFF', fontSize:20}}>Contactus Screen</Text>
	  <Button onPress={() => navigation.openDrawer()} title="Open" />
    </View>
  );
}

function Logout({ navigation }) {
	
	setTimeout(function () {navigation.navigate('Login')}, 400);
	return (
		<ImageBackground source={loginBgImg} style={appstyle.container} >
		</ImageBackground>
	);
}

