import React from 'react';
import { Text, View, Image} from 'react-native';


const MenuSmallCard = (props) => {
    return (
        <View style={{height:72, width:158, marginleft:20, borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd', marginRight:10, marginBottom:15}}>
            <View style={{flexDirection: 'row', padding: 6, backgroundColor:'white'}}>
                <Image source={props.imgUri} style={{width:50, height: 50, resizeMode: 'cover'}}/>

                <View style={{paddingLeft:10, justifyContent:'center'}}>
                 <Text>{props.menuName}</Text>
                 <Text>{props.price}</Text>
                </View>
            </View>
        </View>

    );
};

export default MenuSmallCard;