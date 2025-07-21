import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import { useState } from "react";
import { useRouter } from 'expo-router';
import Anticons from '@expo/vector-icons/AntDesign';
const ForgotPassword = () => {

    const [isEmailFocused, setIsEmailFocused] = useState(false);

    const router = useRouter();

    function gotoVerifyOTP() {
        router.push('/verifyotp')
    }

    function gotoSignUp() {
        router.push('/signup')
    }


    return (

        <View style={[styles.container]}>
            <View style={styles.topSpacer} />
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.description}>Please enter your email address. You will receive a link to create a new password via email.</Text>
            <View style={styles.topSpacer} />
            <View>

                <TextInput
                    placeholder="Enter your email"
                    style={[
                        styles.inputbox, styles.inputbox,
                        isEmailFocused && styles.inputboxFocused,
                    ]}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    editable={true}  // Explicitly make it editable
                    keyboardType="default"  // Explicit keyboard type
                />
                <TouchableOpacity style={styles.inputIcon} >
                    <Anticons name="user" size={22} color="#888" />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.secondaryButton} onPress={gotoVerifyOTP} >
                <Text style={styles.secondaryButtonText}>Get OTP</Text>
            </TouchableOpacity>

            <View style={styles.signup}>
                <Text >Don't have an account?  </Text>
                <TouchableOpacity onPress={gotoSignUp}>
                    <Text style={styles.touchable}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default ForgotPassword;