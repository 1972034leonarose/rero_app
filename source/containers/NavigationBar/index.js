import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const NavigationBar = ({ onPressHome, onPressProfile, onPressReserve }) => {
    return (
        <View style={{ backgroundColor: "#DFE6ED", height: 60, flexDirection: "row" }}>

            <TouchableOpacity style={{ flex: 1 }} onPress={onPressHome}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ width: 40, height: 40 }} source={require("../../assets/home.png")} />
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }} onPress={onPressReserve}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ width: 40, height: 40 }} source={require("../../assets/schedule.png")} />
                    <Text>Reserve</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }} onPress={onPressProfile}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ width: 40, height: 40 }} source={require("../../assets/user.png")} />
                    <Text>Profile</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default NavigationBar;