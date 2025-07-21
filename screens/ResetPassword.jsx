import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
const ResetPassword = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Changed to boolean for toggle
    const [password, setPassword] = useState(""); // Added separate state for password

    // Toggle password visibility
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();
    function gotoPasswordChanged() {
        router.push('/passwordchanged')
    }
    return (

        <View style={styles.container}>
            <View style={styles.topSpacer} />

            <Text style={styles.heading}>Enter new password</Text>



            <Text style={styles.description}>Your new password must be different from previous used passwords</Text>

            <View style={styles.topSpacer} />

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

            <Text style={styles.description}>Must be at least 8 characters</Text>

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
            <Text style={styles.description}>Both password must match</Text>

            <TouchableOpacity style={styles.secondaryButton} onPress={gotoPasswordChanged}>
                <Text style={styles.secondaryButtonText}>Reset Password</Text>
            </TouchableOpacity>

        </View>
    )
};

export default ResetPassword;