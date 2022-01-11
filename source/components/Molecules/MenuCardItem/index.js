import React from 'react';
import { Text, View, Image} from 'react-native';


const MenuCard = (props) => {
    return (
        <View style={{ height:100, width: 350, marginleft:20, borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd', marginRight:10, marginBottom:15}}>
            <View style={{flexDirection: 'row', flex:2, padding: 6}}>
                <Image source={props.imgUri} style={{width:100, height: 100, resizeMode: 'cover'}}/>

                <View style={{flex:1, paddingLeft:10, justifyContent:'center'}}>
                 <Text>{props.menuName}</Text>
                 <Text>{props.price}</Text>
            </View>
            </View>
        </View>

    );
};

export default MenuCard;