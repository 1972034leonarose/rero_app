import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMid from "../../components/Atoms/ButtonMid";

export default class SelectTable extends Component {
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
                                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Select Table</Text>
                            </View>
                        </View>

                        {/**content */}
                        <View style={{ paddingHorizontal: 10 }}>

                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 85 }}>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 85 }}>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 85 }}>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 85 }}>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 85 }}>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                                <View style={{ backgroundColor: "#c4c4c4", borderRadius: 10, width: 75, height: 75 }}></View>
                            </View>

                            <View style={{ paddingTop: 80, flexDirection: "row", justifyContent: "space-between" }}>
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