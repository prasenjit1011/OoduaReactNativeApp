import React, {useState, useEffect} from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, KeyboardAvoidingView } from "react-native";
import { useKeyboard } from '@react-native-community/hooks'
//import HideWithKeyboard from 'react-native-hide-with-keyboard';
//import {FlatListSlider} from 'react-native-flatlist-slider';
import FlatList from './FlatList';
import ReceiverDetails from './ReceiverDetails';
//import HrLine from './HrLine';
//import AppDropDown from './AppDropDown';
//import FooterModal from './BookSuccess';
////import Newmodal from './ThanksMsg';
import appstyle from './appstyle';
const appicon = require('./../images/appicon.png');


const LocationComp = ({ navigation, frmLocData, toLocData }) => {
	const [fromLocation, updFromLocation] = React.useState("Behala");
	const [toLocation, updToLocation] = React.useState("SaltLake");
	
	const keyboard 		= useKeyboard();
	var locationHeight 	= 3;
	var displayLocation = '';
	var bannerHeight 	= 17;
	

	frmLocData(fromLocation);
	toLocData(toLocation);
	//console.log('--From Loc --',fromLocation)

	return (
		<View style={[ appstyle.location]} >
			<View style={appstyle.headerContainer}>
				<View>
					<Text style={appstyle.subHeaderTitle}>Mark,</Text>
					<Text style={appstyle.headerTitle}>Where you want to move?</Text>
				</View>
			</View>
			<View style={appstyle.destinationContainer}>
				<View style={appstyle.destLoc}>
					<View style={appstyle.destDot} />
					<View  style={[appstyle.pt5, appstyle.pl5, appstyle.width95]}>
						<Text style={[appstyle.locationFrom]}>From,</Text>
						<TextInput
							style={appstyle.locationInput}
							onChangeText={updFromLocation}
							//onKeyPress={updLocation}
							value={fromLocation}
							placeholder="India"
						/>
					</View>
				</View>
				<View style={appstyle.destLoc}>
					<View style={appstyle.destDot} />
					<View  style={[appstyle.pt5, appstyle.pl5, appstyle.width95]}>
						<Text style={[appstyle.locationFrom]}>To,</Text>
						<TextInput
							style={appstyle.locationInput}
							onChangeText={updToLocation}
							value={toLocation}
							placeholder="USA"
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const Screen = ({ navigation }) => {
	const [data, setData] = useState(false);
	const [frmLoc, setFrmLocation] = useState('Kolkata');
	const [toLoc, setToLocation] 	= useState('Delhi');
	const frmLocData = (locData) => {
		setFrmLocation(locData)
	}
	const toLocData = (locData) => {
		setToLocation(locData)
	}
	
	const childToParent = (childdata) => {
		console.log('--here 022--', data)
		setData(childdata);
	}

	//console.log('--here 01--', locationArr.fromLocation, locationArr.toLocation)
	//<Text>{locationArr.fromLocation}</Text>

	return (
		<SafeAreaView style={[appstyle.container, data? {backgroundColor:"#818181"}:'']}>
			<ScrollView style={appstyle.scrollView} horizontal={false} vertical={true} >
				<Pressable onPress={() => navigation.openDrawer()}  style={appstyle.appiconlogo}>
					<Image source={appicon} style={appstyle.appicon} />
				</Pressable>
				<LocationComp  navigation={navigation} frmLocData={frmLocData} toLocData={toLocData} />
				<View style={appstyle.choosePackage} >
					<View style={appstyle.topHr} />
					<FlatList />
					<ReceiverDetails  childToParent={childToParent} frmCity={frmLoc} toCity={toLoc} />
				</View>
			</ScrollView>
		</SafeAreaView>
    );
};

export default Screen;