import React from 'react';
import { Text, View, Image } from 'react-native';

const RestoCardItem = (props) => {
    return (
        <View style={{ height:140, width: 140, marginleft:20, borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd', marginRight:10}}>
            <View style={{flex:2, padding: 6}}>
                <Image source={props.imgUri} style={{flex:1, width:null, height: null, resizeMode: 'cover'}}/>
            </View>
            <View style={{flex:1, paddingLeft:10}}>
            <Text>{props.restoName}</Text>
            </View>
        </View>

    );
};

export default RestoCardItem;