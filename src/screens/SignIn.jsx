import { Text, TouchableOpacity, View, TextInput, Image } from "react-native";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import { useRouter } from 'expo-router';
import Anticons from '@expo/vector-icons/AntDesign';
import Enticons from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../styles/global";


const SignIn = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Changed to boolean for toggle
    const [password, setPassword] = useState(""); // Added separate state for password
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");

    const router = useRouter();

    function gotoForgotPassword() {
        router.push('/forgotpassword')
    }

    function gotoSignUp() {
        router.push('/signup')
    }

    // Toggle password visibility
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSpacer} />

            <View>
                <Text style={styles.heading}>Welcome back!</Text>
                <Text style={styles.subheading}>Enter your credential to continue</Text>
            </View>

            <View>
                <TextInput
                    placeholder="Email or username"
                    style={styles.inputbox}
                />
                <TouchableOpacity style={styles.inputIcon} >
                    <Anticons name="user" size={22} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    style={styles.inputbox}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity 
                    style={styles.inputIcon} 
                    onPress={toggleShowPassword}
                >
                    <Ionicons 
                        name={showPassword ? 'eye' : 'eye-off'} 
                        size={22}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.oneLine}>
                <CheckBox
                    title='Remember me'
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.switchText}
                    checkedColor="rgb(38, 143, 125)"
                />

                <TouchableOpacity onPress={gotoForgotPassword}>
                    <Text style={styles.touchable}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.secondaryButton} >
                <Text style={styles.secondaryButtonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or login with</Text>
                <View style={styles.dividerLine} />
            </View>

           <View style={styles.socialIconsContainer}>
    <TouchableOpacity>
        <Anticons name="facebook-square" size={32} color="black" />
    </TouchableOpacity>

    <TouchableOpacity>
        <Anticons name="google" size={32} color="black" />
    </TouchableOpacity>

    <TouchableOpacity>
        <Enticons name="twitter-with-circle" size={32} color="black" />
    </TouchableOpacity>

    <TouchableOpacity>
        <Anticons name="apple1" size={32} color="black" />
    </TouchableOpacity>
</View>

           
            <View style={styles.signup}>
                <Text>Don't have an account?  </Text>
                <Text style={styles.touchable} onPress={gotoSignUp}>Sign up</Text>
            </View>
        </View>
    )
};

export default SignIn;