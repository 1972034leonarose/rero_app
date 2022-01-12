import React from 'react';
import { Text, View, Image} from 'react-native';


const MenuCard = (props) => {
    return (
        <View style={{ height:114, width: 350, marginleft:20, borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd', marginRight:10, marginBottom:15}}>
            <View style={{flexDirection: 'row', padding: 6}}>
                <Image source={props.imgUri} style={{width:100, height: 100, resizeMode: 'cover'}}/>

                <View style={{paddingLeft:10, justifyContent:'center'}}>
                 <Text>{props.menuName}</Text>
                 <Text>{props.price}</Text>
                </View>
            </View>
        </View>

    );
};

export default MenuCard;