import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MenuCardItem from '../../components/Molecules/MenuCardItem/index';

const MenuView = (props) => {
    return (
        <View>
            <View style={{ marginLeft: 25, marginBottom: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <MenuCardItem imgUri={require("../../assets/spaghetti.jpeg")} menuName="Spaghetti Carbonara" price="Rp. 65,000" />
                <MenuCardItem imgUri={require("../../assets/salmon.jpeg")} menuName="Salmon Steak" price="Rp. 95,000" />
                <MenuCardItem imgUri={require("../../assets/mac.jpeg")} menuName="Mac 'n Cheese" price="Rp. 30,000" />
                <MenuCardItem imgUri={require("../../assets/thai.jpeg")} menuName="Thai Beef Salad" price="Rp. 40,000" />
            </View>
        </View>
    );
};

export default MenuView;