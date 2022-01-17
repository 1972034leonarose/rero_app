import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class SettingsPage extends Component {
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
                                <Image style={{ width: 32, height: 32 }} source={require("../../assets/ellipse.png")} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>

                            {/* Account */}
                            <View style={{ marginBottom: 20 }}>
                                {/* header */}
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F9B153" }}>My Account</Text>
                                </View>

                                {/* contentItem */}
                                <View style={{ marginBottom: 15 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Account</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14 }}>User data and security</Text>
                                    </View>
                                </View>

                                {/* contentItem */}
                                <View style={{ marginBottom: 15 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Notification</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14 }}>Schedule and notifications sound</Text>
                                    </View>
                                </View>

                                {/* contentItem */}
                                <View style={{ marginBottom: 15 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Language</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14 }}>Indonesia, English</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                {/* header */}
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F9B153" }}>Feedback</Text>
                                </View>
                                {/* content */}
                                <View>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        {/* item */}
                                        <View style={{ marginBottom: 10 }}>
                                            <Text style={{ fontSize: 16 }}>Rate us</Text>
                                        </View>

                                        {/* item */}
                                        <View style={{ marginBottom: 10 }}>
                                            <Text style={{ fontSize: 16 }}>Contact us</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 50 }}>
                                {/* header */}
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F9B153" }}>About App</Text>
                                </View>
                                {/* content */}
                                <View style={{ marginBottom: 15 }}>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        {/* item */}
                                        <View style={{ marginBottom: 10 }}>
                                            <Text style={{ fontSize: 16 }}>About</Text>
                                        </View>

                                        {/* item */}
                                        <View style={{ marginBottom: 10 }}>
                                            <Text style={{ fontSize: 16 }}>Terms & Conditions</Text>
                                        </View>

                                        {/* item */}
                                        <View style={{ marginBottom: 10 }}>
                                            <Text style={{ fontSize: 16 }}>Privacy Policy</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        </View>
                    </View>

                </SafeAreaView >
            </View >
        )
    }

}