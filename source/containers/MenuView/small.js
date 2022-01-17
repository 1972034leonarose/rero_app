import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MenuCardItem from '../../components/Molecules/MenuCardItem/other';

const MenuSmallView = (props) => {
    return (
        <View style={{}}>
            {/* <View style={{ marginLeft: 10, marginBottom: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
            </View> */}

            <View style={{ flexDirection: 'row' }}>
                <MenuCardItem imgUri={require("../../assets/salmon.jpeg")} menuName="Norweigan Salmon" price="Rp. 95,000" />
                <MenuCardItem imgUri={require("../../assets/thai.jpeg")} menuName="Thai Beef Salad" price="Rp. 65,000" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <MenuCardItem imgUri={require("../../assets/spaghetti.jpeg")} menuName="Spaghetti" price="Rp. 65,000" />
                <MenuCardItem imgUri={require("../../assets/mac.jpeg")} menuName="Food" price="Rp. 35,000" />
            </View>
        </View >
    );
};

export default MenuSmallView;