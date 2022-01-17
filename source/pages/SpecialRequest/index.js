import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMid from "../../components/Atoms/ButtonMid";

export default class SpecialRequest extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />
                <SafeAreaView>
                    <View style={{ padding: 16 }}>
                        <View style={{ marginBottom: 50, flexDirection: "row" }}>
                            <View>
                                <Image style={{ width: 32, height: 32 }} source={require("../../assets/back.png")} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Special Request</Text>
                            </View>
                        </View>

                        {/**content */}
                        <View style={{ paddingHorizontal: 20 }}>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Any food requests?</Text>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 16 }}>Name of food</Text>
                                <TextInput style={{ backgroundColor: "#e8e8e8", width: 300, borderRadius: 5, height: 35 }}></TextInput>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 16 }}>Type of food</Text>
                                <TextInput style={{ backgroundColor: "#e8e8e8", width: 300, borderRadius: 5, height: 35 }}></TextInput>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 16 }}>Cuisine</Text>
                                <TextInput style={{ backgroundColor: "#e8e8e8", width: 300, borderRadius: 5, height: 35 }}></TextInput>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Any theme you want for the reservation?</Text>
                                <TextInput style={{ backgroundColor: "#e8e8e8", width: 200, borderRadius: 5, height: 35 }}></TextInput>
                            </View>

                            <View style={{ marginBottom: 25 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Notes</Text>
                                <TextInput style={{ backgroundColor: "#e8e8e8", width: 300, borderRadius: 5, height: 35 }}></TextInput>
                            </View>

                            <View style={{ paddingTop: 16, flexDirection: "row", justifyContent: "space-between" }}>
                                <View></View>
                                <ButtonMid title={"Done"} />
                            </View>
                        </View>
                    </View>

                </SafeAreaView >
            </View >
        )
    }

}