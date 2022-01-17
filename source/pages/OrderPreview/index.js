import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMid from "../../components/Atoms/ButtonMid";

export default class OrderPreview extends Component {
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
                                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Order Preview</Text>
                            </View>
                        </View>

                        {/**content */}
                        <View style={{ paddingHorizontal: 20 }}>

                            <View style={{ marginBottom: 20 }}>
                                {/**item */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Restaurant : </Text>
                                    <Text style={{ fontSize: 18 }}>Gourmeteria</Text>
                                </View>

                                {/**item */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Date : </Text>
                                    <Text style={{ fontSize: 18 }}>28 October 2021</Text>
                                </View>

                                {/**item */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hour : </Text>
                                    <Text style={{ fontSize: 18 }}>17:30 PM</Text>
                                </View>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <View>
                                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Special Request</Text>
                                        <TextInput style={{ backgroundColor: "#e8e8e8", width: 20, borderRadius: 10, height: 20 }}></TextInput>
                                    </View>
                                    <Text style={{ fontSize: 16 }}>Type of food</Text>
                                </View>
                            </View>

                            <View style={{ marginBottom: 10 }}>
                                {/**header */}
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F9B153" }}>Orders:</Text>
                                </View>
                                {/**content */}
                                <View>
                                    <View style={{ marginBottom: 5, justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16 }}>Norweigan Salmon Steak</Text>
                                        <TextInput style={{ backgroundColor: "#e8e8e8", width: 50, borderRadius: 10, height: 20 }}></TextInput>
                                    </View>

                                    <View style={{ marginBottom: 5, justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16 }}>Caesar Salad</Text>
                                        <TextInput style={{ backgroundColor: "#e8e8e8", width: 50, borderRadius: 10, height: 20 }}></TextInput>
                                    </View>


                                    <View style={{ marginBottom: 5, justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16 }}>Spaghetti Aglio Olio</Text>
                                        <TextInput style={{ backgroundColor: "#e8e8e8", width: 50, borderRadius: 10, height: 20 }}></TextInput>
                                    </View>

                                    <View style={{ marginBottom: 5, justifyContent: "space-between", flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16 }}>Mille Crepe</Text>
                                        <TextInput style={{ backgroundColor: "#e8e8e8", width: 50, borderRadius: 10, height: 20 }}></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 10, width: 300, height: 1, backgroundColor: "#cccccc" }}></View>

                            <View>
                                <Text style={{ color: "#F9B153" }}>Would you like anything else?</Text>
                            </View>

                            <View style={{ paddingTop: 20 }}>
                                <View style={{ paddingBottom: 5 }}>
                                    <Text style={{ color: "#F9B153", fontWeight: "bold" }}>Payment summary</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Price</Text>
                                    <Text>Rp. 5.000</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Special request</Text>
                                    <Text>Rp. 10.000</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Reserve fee</Text>
                                    <Text>Rp. 15.000</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Down payment</Text>
                                    <Text>50%</Text>
                                </View>

                                <View style={{ marginBottom: 10, width: 300, height: 1, backgroundColor: "#cccccc" }}></View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: "bold" }}>Total</Text>
                                    <Text>Rp. 1.000.000</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 50 }}>
                                    <View></View>
                                    <ButtonMid title={"Make Payment"} onPress={() => this.props.navigation.navigate("Home")} />
                                </View>

                            </View>
                        </View>
                    </View>

                </SafeAreaView >
            </View >
        )
    }
}