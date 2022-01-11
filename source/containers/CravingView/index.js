import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CravingViewItem from '../../components/Molecules/CravingViewItem';

const CravingView = (props) => {
    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>What are you craving?</Text>
                    </View>
                    <View style={{ justifyContent: "flex-end" }}>
                        <Image style={{ width: 32, height: 32 }} source={require("../../assets/arrow.png")} />
                    </View>
                </View>


                <ScrollView horizontal style={{ flexDirection: "row", paddingTop:5}} showsHorizontalScrollIndicator={false}>
                    {/**item */}
                    <CravingViewItem imgUri={require("../../assets/arrow.png")} title="Japanese" />
                    <CravingViewItem imgUri={require("../../assets/arrow.png")}  title="Dessert" />
                    <CravingViewItem imgUri={require("../../assets/arrow.png")}  title="Chinese" />
                    <CravingViewItem imgUri={require("../../assets/arrow.png")}  title="Steak" />
                    <CravingViewItem imgUri={require("../../assets/arrow.png")}  title="Breakfast" />
                </ScrollView>

            </View>
        </View>
    );
};

export default CravingView;