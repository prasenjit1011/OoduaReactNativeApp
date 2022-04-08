import React, {useEffect}  from 'react';
import { View, Text, Button, StyleSheet, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
console. disableYellowBox = true;

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#F40' }}>
      <Text style={{color:'#FFF', fontSize:20}}>Notifications Screen</Text>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#048' }}>
	
      <Text style={{color:'#FFF', fontSize:20}}>Feed Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#0BB' }}>
	
	  <Image style = {styles.logo} source = {require('./../images/appicon.png')} />
	  
      <Text style={{color:'#FFF', fontSize:20}}>My Profile Screen</Text>
    </View>
  );
}

function Contactus() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#748' }}>
      <Text style={{color:'#FFF', fontSize:20}}>Contactus Screen</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feed} options={{ headerShown: false,  animation:"slide_from_left", }} />
      <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false,  animation:"slide_from_left", }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false,  animation:"slide_from_left", }} />
      <Drawer.Screen name="Contactus" component={Contactus} options={{ headerShown: false,  animation:"slide_from_left", }} />
    </Drawer.Navigator>
  );
}

function App() {
    useEffect(()=>{SplashScreen.hide()},[])
	return (
		<View>
			<Text>Hello </Text>
		</View>
	);
}

export default App;



var styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
      },
      overlay: {
        opacity: 0.5,
        backgroundColor: '#000000'
      },
      logo: {
		    width: 160,
		    height: 52,
        alignItems:'center'
      },
      backdrop: {
        flex:1,
        flexDirection: 'column'
      },
      headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
      }
    });