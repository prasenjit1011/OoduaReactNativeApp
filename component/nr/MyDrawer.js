import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';


import appstyle from './appstyle';

const Drawer = createDrawerNavigator();
const DrawerContentScrollView = ({navigation}) => <MaterialCommunityIcons 
    name='menu' 
    size={30} 
    color='tomato' 
    onPress={() => alert(753)}
/>;

const DrawerItemList = () => {
	
}

const MenuIcon = ({props}) => <MaterialCommunityIcons 
    name='menu' 
    size={30} 
    color='red' 
    onPress={() => alert()}
/>;

const MyDrawer = ({navigation}) => {
	return (
		<Drawer.Navigator 
			style={{ flex: 1, activeTintColor: '#F00', justifyContent: 'center',  alignItems: 'center', backgroundColor: '#F00' }}	
			
			drawerStyle={{
				backgroundColor: '#078',
				width: 240,
				activeTintColor: '#F00'
			}}

			drawerContentOptions={{
				activeTintColor: '#FFF',
				itemStyle: { marginVertical: 30 },
			}}
		>
            <Drawer.Screen name="Home" component={NewDrawerScreen} />
        </Drawer.Navigator>
    )
}


const NewDrawerScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 16, padding:"5%", backgroundColor:'#090'  }}>
			<Text style={appstyle.loginBtnTxt}>My New Drawer</Text>
		</View>
    );
};

export default MyDrawer;