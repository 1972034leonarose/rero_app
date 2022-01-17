import React from "react";
import { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackButton = ({ onPress }) => {
    return (
        <View style={{ justifyContent: 'center', paddingRight: 10 }}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require("../../../assets/back.png")} style={{ width: 24, height: 24 }} ></Image>
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;