import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import RestoCardItem from '../../components/Molecules/RestoCardItem';

const RestoView = ({ OnPressMozaic, title }) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
            <ScrollView style={{ flexDirection: "row", paddingTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <RestoCardItem imgUri={require("../../assets/cocoon.jpeg")} restoName="Cocoon Beach Club" />

                <TouchableOpacity onPress={OnPressMozaic} >
                    <RestoCardItem imgUri={require("../../assets/mozaic.jpeg")} restoName="Cafeteria" />
                </TouchableOpacity>

                <RestoCardItem imgUri={require("../../assets/japanese.jpeg")} restoName="Hana Restaurant" />
                <RestoCardItem imgUri={require("../../assets/white.jpeg")} restoName="White Lotus" />

            </ScrollView>
        </View>
    );
};

export default RestoView;