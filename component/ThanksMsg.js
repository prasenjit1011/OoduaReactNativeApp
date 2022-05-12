import React from 'react';
import { SafeAreaView, Modal,ScrollView, ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable } from "react-native";
import appstyle from './appstyle';

const ThanksMsg = ({ navigation }) => {
    const bookingSuccess 	= require('./../images/bookingSuccess.png');
    return (
        <Modal 
            visible={true}
            swipeDirection={['up', 'left', 'right', 'down']}
            style={appstyle.modalView}
            transparent={true}
            > 
            <View style={appstyle.containerStyle}>
                <View style={appstyle.content}>
                    <Image  source={bookingSuccess} style={appstyle.bookingSuccess} />
                    <Text>Thank You!</Text>				
					<Pressable style={appstyle.button} onPress={() => console.log('----Close Modal----')}>
						<Text style={appstyle.text}>Book</Text>
					</Pressable>
					
                </View>
            </View>
        </Modal>
    )
};


export default ThanksMsg;