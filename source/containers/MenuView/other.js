import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MenuCardItem from '../../components/Molecules/MenuCardItem/index';

const MenuMainView = (props) => {
    return (
        <View>
            <View style={{ marginLeft: 25, marginBottom: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <MenuCardItem imgUri={require("../../assets/salmon.jpeg")} menuName="Norweigan Steak Salad" price="Rp. 95,000" />
                <MenuCardItem imgUri={require("../../assets/mac.jpeg")} menuName="Mac 'n Cheese" price="Rp. 35,000" />
                <MenuCardItem imgUri={require("../../assets/spaghetti.jpeg")} menuName="Spaghetti" price="Rp. 65,000" />
            </View>
        </View>
    );
};

export default MenuMainView;