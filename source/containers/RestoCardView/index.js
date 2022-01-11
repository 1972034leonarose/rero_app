import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import RestoCardItem from '../../components/Molecules/RestoCardItem';

const RestoView = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
            <ScrollView style={{ flexDirection: "row" , paddingTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <RestoCardItem imgUri={require("../../assets/imagedumb.png")} restoName="Cafe italia"/>
                <RestoCardItem imgUri={require("../../assets/imagedumb.png")} restoName="Cafe italia"/>
                <RestoCardItem imgUri={require("../../assets/imagedumb.png")} restoName="Cafe italia"/>
                <RestoCardItem imgUri={require("../../assets/imagedumb.png")} restoName="Cafe italia"/>

            </ScrollView>
        </View>
    );
};

export default RestoView;