import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MenuCardItem from '../../components/Molecules/MenuCardItem/other';

const MenuSmallView = (props) => {
    return (
        <View style={{alignItems:'center', backgroundColor:'red'}}> 
            <View style={{marginLeft:25, marginBottom:10, marginTop:20}}>
             <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
             </View>

             <View style={{flexDirection:'row'}}>
            <MenuCardItem imgUri={require("../../assets/imagedumb.png")} menuName="Food" price="Rp. 65,000"/>
            <MenuCardItem imgUri={require("../../assets/imagedumb.png")} menuName="Food" price="Rp. 65,000"/>
            </View>
        </View>
    );
};

export default MenuSmallView;