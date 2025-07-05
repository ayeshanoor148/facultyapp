import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import { useState } from "react";
import { useRouter } from 'expo-router';
const VerifyOTP = () => {

 const router = useRouter();
 
    return (
        <View style={styles.container}>
            <View style={styles.topSpacer} />

            <Text style={styles.heading}>Verify Code</Text>


            <Text style={styles.description}>Please enter the code we just sent to email example@gmail.com</Text>

            <View style={styles.topSpacer} />

            <View style={styles.oneLine}>
                <View>
                    <TextInput
                        placeholder=""
                        style={styles.OTPbox}

                    />
                </View>

                <View>
                    <TextInput
                        placeholder=""
                        style={styles.OTPbox}

                    />
                </View>

                <View>
                    <TextInput
                        placeholder=""
                        style={styles.OTPbox}

                    />
                </View>

                <View>
                    <TextInput
                        placeholder=""
                        style={styles.OTPbox}

                    />
                </View>
            </View>

            <View style={styles.signup} >
                <Text >Didn't receive Code?  </Text>
                <TouchableOpacity>
                    <Text style={styles.touchable}>Resend code</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.secondaryButton} >
                <Text style={styles.secondaryButtonText}>Verify</Text>
            </TouchableOpacity>

        </View>
    )
};

export default VerifyOTP;