import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonReverseColor = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}} onPress={onPress}>
        <View style={{width: 100,
        height: 28,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#F9B153", 
        marginVertical: 6, 
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{ fontSize: 12, color: "#F9B153", fontWeight: "bold"}}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default ButtonReverseColor;