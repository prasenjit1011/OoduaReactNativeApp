import React, {useState} from 'react';
import { Modal, Text, Image, TextInput, View, Pressable, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";
import AppDropDown from './AppDropDown';
import appstyle from './appstyle';

const Screen = ({ navigation , childToParent, frmCity, toCity}) => {
	const [modalStatus, updModalStatus] 	= React.useState(false);
	const [isLoading, setLoading] 			= React.useState(false);
	const bookingSuccess 					= require('./../images/bookingSuccess.png');
	
	const [receiverName, updReceiverName] 			= React.useState("Receiver Name");
	const [receiverPhone, updReceiverPhone] 		= React.useState(1234567890);//"Receiver Phone"
	const [receiverEmail, updReceiverEmail] 		= React.useState('test01@gmail.com');//"Receiver Email"
	const [receiverShipping, updReceiverShipping] 	= React.useState("");
	const [barrelUnit, updBarrelUnit] 				= React.useState(0);
	const [regularBagUnit, updRegularBagUnit] 		= React.useState(0);
	const [tallBagUnit, updTallBagUnit] 			= React.useState(0);
	

	console.log('frmCity, toCity :: ',frmCity, toCity);
	
	const doBooking = async () => {
		
        console.log(receiverName, receiverPhone, receiverEmail, receiverShipping, barrelUnit, regularBagUnit, tallBagUnit);
		//alert(789456);
		console.log('=======');
		Keyboard.dismiss();
		setLoading(true);
		//let dataToSend = {email: username, password: pwd};
		let dataToSend = {frmCity:frmCity, toCity:toCity, receiverName:receiverName, receiverPhone:receiverPhone, receiverEmail:receiverEmail, receiverShipping:receiverShipping, barrelUnit:barrelUnit, regularBagUnit:regularBagUnit, tallBagUnit:tallBagUnit};
		let formBody = [];
		for (let key in dataToSend) {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(dataToSend[key]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');
	  
		fetch('https://ooduacargo.com/booking/api/booking_create.php',{
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
			console.log(854, responseJson);
			updModalStatus(true);
			/*
			if(responseJson.status){

			}
			else{
				//setErrortext(responseJson.msg);
				return;
			}*/
		})
		.catch((error) => {
			//Hide Loader
			setLoading(false);
			console.error(222,error);
		});
		
		
		
		//alert(876);
		setLoading(true);
		
		childToParent(true);
		/*
		setTimeout(function () {
			setLoading(false);
			//navigation.navigate('Booking')
			console.log('---modalStatus---F : ', modalStatus);
			//updModalStatus(true);
			childToParent(true);
			console.log('---modalStatus---T ', modalStatus, receiverName);
			console.log('=======================')
		}, 200);
		*/
	};	

	//onPress={() => {updModalStatus(true);childToParent(true);}}
	
    return (
        <>
			<Text style={appstyle.receiverDetails}>Receiver Details :: {modalStatus}</Text>
			<Text style={appstyle.receiverDetailsTxt}>Receiver Name</Text>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updReceiverName}
				value={receiverName}
				placeholder="Receiver Name"
			/>
			<Text style={appstyle.receiverDetailsTxt}>Receiver Phone</Text>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updReceiverPhone}
				value={receiverPhone}
				placeholder="Receiver Phone"
			/>
			<Text style={appstyle.receiverDetailsTxt}>Receiver Email</Text>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updReceiverEmail}
				value={receiverEmail}
				placeholder="Receiver Email"
			/>
			<Text style={appstyle.receiverDetailsTxt}>Shipping</Text>
			<AppDropDown />
			<View style={appstyle.choosePack}>
				<Text style={appstyle.receiverDetailsTxt}>Barrel Unit</Text>
				<Text style={appstyle.bagDetails}>Barrel Price is $250 maximum weight per Barrel is 250 lbs</Text>
			</View>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updBarrelUnit}
				value={barrelUnit}
				placeholder="Barrel Unit"
			/>
			<View style={appstyle.choosePack}>
				<Text style={appstyle.receiverDetailsTxt}>Regular Bag Unit</Text>
				<Text style={appstyle.bagDetails}>A bag regular bag is $140 maximum weight per bag is 100 lbs</Text>
			</View>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updRegularBagUnit}
				value={regularBagUnit}
				placeholder="Regular Bag Unit"
			/>
			<View style={appstyle.choosePack}>
				<Text style={appstyle.receiverDetailsTxt}>Tall Bag Unit</Text>
				<Text style={appstyle.bagDetails}>For Tall bag price is $160 max weight of 130 lbs</Text>
			</View>
			<TextInput
				style={appstyle.receiverInput}
				onChangeText={updTallBagUnit}
				value={tallBagUnit}
				placeholder="Tall Bag Unit"
			/>

			<TouchableOpacity style={[appstyle.bookBtn, {flexDirection:'row'}]} onPress={() => doBooking()}>
				<Text style={appstyle.bookingBtnTxt}>{modalStatus?'Thank You!':'Book'}</Text>
				<ActivityIndicator animating={isLoading} style={{borderColor:'#FFF', shadowColor:'#FFF'}} />
			</TouchableOpacity>
			
			<Modal 
				visible={modalStatus?true:false}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={appstyle.modalView}
				transparent={true}
				> 
				<View style={appstyle.modalContainer}>
					<View style={appstyle.content}>

						<Image  source={bookingSuccess} style={appstyle.bookingSuccess} />
						<Text style={appstyle.thanksHeader}>Thanks You!</Text>
						<Text style={appstyle.thanksHeaderTxt}>for your booking</Text>
						
						<Text style={appstyle.thanksHeaderContent} >
							Your booking is now being processed. We will let you know once the order is picked from your location.
						</Text>
						<Pressable style={appstyle.thanksMsgBtn} onPress={() => {updModalStatus(false);childToParent(false);}}>
							<Text style={appstyle.text}>OK</Text>
						</Pressable>
						<Text onPress={() =>  {updModalStatus(false);childToParent(false);}} style={appstyle.thankBookagain}>
							Book Again
						</Text>
						<View style={appstyle.bottomHr} />
					</View>
				</View>
			</Modal>
        </>
    );
}




export default Screen;