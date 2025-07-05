import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import { useState } from "react";
import { useRouter } from 'expo-router';
const ResetPassword = () => {

    const [isChecked, setIsChecked] = useState(false);


     const router = useRouter();
     function gotoPasswordChanged(){
        router.push('/passwordchanged')
     }
    return (

        <View style={styles.container}>
            <View style={styles.topSpacer} />

            <Text style={styles.heading}>Enter new password</Text>
          


            <Text style={styles.description}>Your new password must be different from previous used passwords</Text>

            <View style={styles.topSpacer} />

            <View>
                <TextInput
                    placeholder="🔒 Password"
                    style={styles.inputbox}
                    secureTextEntry
                />
            </View>

            <Text style={styles.description}>Must be at least 8 characters</Text>

            <View>
                <TextInput
                    placeholder="🔒 Confirm Password"
                    style={styles.inputbox}
                    secureTextEntry
                />
            </View>

            <Text style={styles.description}>Both password must match</Text>

            <TouchableOpacity style={styles.secondaryButton} onPress={gotoPasswordChanged}>
                <Text style={styles.secondaryButtonText}>Reset Password</Text>
            </TouchableOpacity>

        </View>
    )
};

export default ResetPassword;