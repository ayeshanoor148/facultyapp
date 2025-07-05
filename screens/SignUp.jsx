import { Text, TouchableOpacity, View, TextInput, Image } from "react-native";
import { CheckBox } from 'react-native-elements';
import Anticons from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fonicons from '@expo/vector-icons/Fontisto';
import { useState } from "react";
import { useRouter } from 'expo-router';
import Enticons from '@expo/vector-icons/Entypo';
import styles from "../styles/global";

const SignUp = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Changed to boolean for toggle
    const [password, setPassword] = useState(""); // Added separate state for password

    // Toggle password visibility
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();

    return (
        <View style={styles.container}>


            <View>
                <Text style={styles.heading}>Hi!</Text>
                <Text style={styles.subheading}>Create a new account</Text>
            </View>

            <View>
                <TextInput
                    placeholder="Email"
                    style={styles.inputbox}

                />

                <TouchableOpacity style={styles.inputIcon} >
                    <Fonicons name="email" size={22} color="#888" />
                </TouchableOpacity>

            </View>

            <View>
                <TextInput
                    placeholder="Username"
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

            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Confirm Password"
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
                        color='#888'
                    />
                </TouchableOpacity>
            </View>


            <View style={styles.oneLine}>
                <CheckBox

                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.switchText}
                    checkedColor="rgb(38, 143, 125)"

                />

                <Text>
                    <Text >I accept the {''}</Text>
                    <TouchableOpacity> <Text style={styles.touchable}>terms</Text></TouchableOpacity>
                    <Text > {''}and{''} </Text>
                    <TouchableOpacity> <Text style={styles.touchable}>privacy policy</Text></TouchableOpacity>

                </Text>

                <View style={styles.headerSpacer} />

            </View>

            <TouchableOpacity style={styles.secondaryButton} >
                <Text style={styles.secondaryButtonText}>Sign up</Text>
            </TouchableOpacity>


            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or Sign up with</Text>
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
                <Text >Already have an account?  </Text>
                <TouchableOpacity><Text style={styles.touchable}>Sign in</Text></TouchableOpacity>
            </View>

        </View>

    )
};

export default SignUp;