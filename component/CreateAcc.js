import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";
import appstyle from './appstyle';
import { useKeyboard } from '@react-native-community/hooks'


const Screen = ({ navigation }) => {
    const image = require('./../images/register.png');
    const [msg, setErrortext] = React.useState('');
	const [fullname, onChangeFullname] = React.useState("Name");
    const [username, onChangeUsername] = React.useState("test@cargo.com");
    const [phoneNum, onChangePhone] = React.useState("1234567890");
    const [pwd, onChangePwd] = React.useState("");
    const [confirmPwd, onChangeConfirmPwd] = React.useState("");

	const avatar = require('./../images/avatar.png');
	const email = require('./../images/email01.png');
	const phone = require('./../images/phone01.png');
	const lock = require('./../images/lock01.png');
	const [isLoading, setLoading] = React.useState(false);

	const doSignup = () => {
		console.log('----------');
		setErrortext('');
		
        
        if (!fullname) {
			setErrortext('Please Enter Name');
			return;
		}
        if (!username) {
			setErrortext('Please Enter Email Id');
			return;
		}
        if (!phoneNum) {
			setErrortext('Please Enter Phone Number');
			return;
		}
		if (!pwd) {
			setErrortext('Please Enter Password');
			return;
		}
        if (!confirmPwd) {
			setErrortext('Please Enter Confirm Password');
			return;
		}
        if (pwd != confirmPwd) {
			setErrortext('Password and Confirm Password Mismatch');
			return;
		}
        
        console.log(fullname, username, phoneNum, pwd, confirmPwd);
		console.log('=======');
		Keyboard.dismiss();
		setLoading(true);
		//let dataToSend = {email: username, password: pwd};
		let dataToSend = {name: fullname, email: username, phoneNum: phoneNum, password: pwd};
		let formBody = [];
		for (let key in dataToSend) {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(dataToSend[key]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');
	  
		fetch('https://ooduacargo.com/booking/api/create_account.php',{
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

			if(responseJson.status){
				setTimeout(function () {
					setLoading(false);
					navigation.navigate('Booking')
				}, 1);
			}
			else{
				setErrortext(responseJson.msg);
				return;
			}

		})
		.catch((error) => {
		  //Hide Loader
		  setLoading(false);
		  console.error(222,error);
		});

	};
	



	const keyboard = useKeyboard()
	var logoHeight = 4;
	if(keyboard.keyboardShown){
        //updateMsg('');
		logoHeight = 8;
	}


    return (
        <ImageBackground source={image} style={appstyle.container} >
            <View style={{ flex: logoHeight }}>
                <Image  source={logo} style={appstyle.reglogo} />
            </View>
            <SafeAreaView style={appstyle.frmContainer}>
                <ScrollView style={appstyle.scrollView}>
                    <View style={{ flex: 28, padding:"5%"  }}>
                    {(keyboard.keyboardShown)?<></>:<Text style={appstyle.txtMsg}>{msg}</Text>}
                        <View style={appstyle.sectionStyle}>
                            <Image
                                source={avatar}
                                style={appstyle.imageStyle}
                            />
                            <TextInput
                                style={appstyle.inpField}
                                placeholder="Enter Your Name Here"
                                underlineColorAndroid="transparent"
                                onChangeText={onChangeFullname}
                                value={fullname}
                            />
                        </View>
                        <View style={appstyle.sectionStyle}>
                            <Image
                                source={email}
                                style={appstyle.imageStyle}
                            />
                            <TextInput
                                style={appstyle.inpField}
                                placeholder="Email"
                                underlineColorAndroid="transparent"
                                onChangeText={onChangeUsername}
                                value={username}
                            />
                        </View>
                        


                        <View style={appstyle.sectionStyle}>
                            <Image
                                source={phone}
                                style={appstyle.imageStyle}
                            />
                            <TextInput
                                style={appstyle.inpField}
                                placeholder="Phone"
                                underlineColorAndroid="transparent"
                                onChangeText={onChangePhone}
                                value={phoneNum}
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
                                placeholder="Password"
                                underlineColorAndroid="transparent"
                                onChangeText={onChangePwd}
                                value={pwd}
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
                                placeholder="Confirm Password"
                                underlineColorAndroid="transparent"
                                onChangeText={onChangeConfirmPwd}
                                value={confirmPwd}
                            />
                        </View>
                        
                        <TouchableOpacity style={[appstyle.loginBtn, {flexDirection:'row'}]} onPress={() => doSignup()}>
                            <Text style={appstyle.loginBtnTxt}>Register</Text>
                            <ActivityIndicator animating={isLoading} style={{borderColor:'#FFF', shadowColor:'#FFF'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, paddingTop:"5%", alignSelf:"center"  }}>
                        <Text style={appstyle.createAccount}>
                            Already have an account? &nbsp;
                            <Text style={appstyle.loginTxt} onPress={() => navigation.navigate('Login')}>Login</Text>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const logo 	= require('./../images/logo.png');


export default Screen;