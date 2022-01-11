import React from 'react';
import { Text, View, Image } from 'react-native';

const CravingViewItem = (props) => {
    return (
        <View width={100}style={{ marginRight: 10, alignItems: 'center' , borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd', padding:4, backgroundColor: 'red'}}>
            <View style={{paddingTop: 5, paddingLeft:5, paddingRight:5}}>
            <Image style={{ width: 80, height: 80}} source={props.imgUri} />
            </View>
            <View height={30} >
            <Text>{props.title}</Text>
            </View>
        </View>
    )
};

export default CravingViewItem;