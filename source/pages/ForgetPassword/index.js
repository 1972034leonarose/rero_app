import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from "react-native";
import ButtonLong from "../../components/Atoms/ButtonLong";
import TextFieldA from "../../components/Atoms/TextFieldA";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ForgetPassword extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FEDC78" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />
                <View style={{ paddingVertical: 40, paddingHorizontal: 16 }}>
                    <Image source={require("../../assets/ellipse.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 40, backgroundColor: "#FFFFFF", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}> Forgot Password</Text>
                        <Text style={{ fontSize: 16 }}>Please enter you email address to receive a verification code</Text>
                    </View>

                    <View style={{ marginBottom: 150, marginTop: 50 }}>
                        <TextFieldA textplaceholder="Email" />
                    </View>


                    <View>
                        <ButtonLong title="Send Verification Code" />
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16 }}>Back to </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontSize: 16, color: "#D86B22" }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}