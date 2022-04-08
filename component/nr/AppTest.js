import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Image, TextInput, View, Alert, Pressable, TouchableOpacity, ActivityIndicator } from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();

const Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 17 }}>
            <Text>Test Page....</Text>
        </View>
    );
};

const Home = () => {
    return (
        <View style={{ flex: 17 }}>
            <Text>Home Page</Text>
        </View>
    );
}


const About = () => {
    return (
        <View style={{ flex: 17 }}>
            <Text>About Us Page</Text>
        </View>
    );
}

const Contact = () => {
    return (
        <View style={{ flex: 17 }}>
            <Text>Contact Page</Text>
        </View>
    );
}
export default Screen;