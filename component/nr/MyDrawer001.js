import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';


import NavIcon from './screen/NavIcon';
import Tabmenu from './Tabmenu';
import Tabbar from './Tabbar';
import BrandStack from './BrandStack';

import HomeScreen from './HomeScreen';
import AboutusScreen from './AboutusScreen';
import SettingsScreen from './SettingsScreen';

import Aboutme from './screen/Aboutus';
import Contact from './screen/Contact';
import Images from './screen/Images';
import Skill from './screen/Skill';

import Settings from './screen/Settings';
import Mobile from './screen/Mobile';
import Computer from './screen/Computer';
import Bike from './screen/Bike';
import Feed from './screen/Feed';
import Cart from './screen/Cart';
import Orders from './screen/Orders';

import Brand from './screen/Brand';
import Category from './screen/Category';
import Offer from './screen/Offer';


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
	
				<Drawer.Screen 
					name="Tabbar" component={Tabbar} navigation={navigation}
				/>
				<Drawer.Screen name="Home" component={Tabmenu} />
				<Drawer.Screen name="BrandStack" component={BrandStack} />
				<Drawer.Screen name="Aboutus" component={AboutusScreen}  />
				<Drawer.Screen name='Settings' component={SettingsScreen} />
				
				
				<Drawer.Screen name='Contact' component={Contact} />
				<Drawer.Screen name='Images' component={Images} />
				<Drawer.Screen name='Skill' component={Skill} />


				<Drawer.Screen name='Mobile' component={Mobile} />
				<Drawer.Screen name='Computer' component={Computer} />
				<Drawer.Screen name='Bike' component={Bike} />
				<Drawer.Screen name='Feed' component={Feed} />
				<Drawer.Screen name='Feed2' component={Feed} />
				<Drawer.Screen 
					name='Cart' component={Cart} 	

					screenOptions = {{
						headerTitle: 'BrandStack :d Brand',
						headerRight: () => (
							<NavIcon
								navigationProps={navigation}
							/>
						),
					}}
					
				/>
				<Drawer.Screen name='Orders' component={Orders} />
		
		</Drawer.Navigator>
	);
}

export default MyDrawer;