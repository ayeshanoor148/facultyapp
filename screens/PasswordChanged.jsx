import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useRouter } from 'expo-router';
const PasswordChanged = () => {

 const router = useRouter();
function gotoSignIn(){
    router.push('/signin')
}

    return (

        <View style={styles.container}>
             <View style={styles.center}>
                <Ionicons name="checkmark-circle" size={70} color="green" />

            </View>
            <View style={styles.topSpacer} />

            <Text style={styles.title}>Password Changed!</Text>
            <View style={styles.center}>
                <Text style={styles.description}>Your password has been changed Successfully!</Text>
            </View>

            <View style={styles.topSpacer} />

           
            <TouchableOpacity style={styles.secondaryButton} onPress={gotoSignIn}>
                <Text style={styles.secondaryButtonText}>Back to Sign in</Text>
            </TouchableOpacity>

        </View>
    )
};

export default PasswordChanged;