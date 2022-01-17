import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonMid = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: "#F9B153", alignItems: "center", justifyContent: "center", borderRadius: 7, height: 50, width: 200 }} onPress={onPress}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }} >{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonMid;