import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "../styles/global";
import { useState, useRef } from "react";

const VerifyOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputs = useRef([]);

    const handleOtpChange = (text, index) => {
        // Update OTP value
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to next box if number entered
        if (text && index < 3) {
            otpInputs.current[index + 1].focus();
        }
        // Move to previous box if number deleted
        if (!text && index > 0) {
            otpInputs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        console.log("Verifying OTP:", enteredOtp);
        // Add verification logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSpacer} />
            <Text style={styles.heading}>Verify Code</Text>
            <Text style={styles.description}>
                Please enter the code we just sent to email example@gmail.com
            </Text>

            <View style={styles.oneLine}>
                {[0, 1, 2, 3].map((index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (otpInputs.current[index] = ref)}
                        value={otp[index]}
                        onChangeText={(text) => handleOtpChange(text, index)}
                        style={styles.OTPbox}
                        keyboardType="numeric"
                        maxLength={1}
                        autoFocus={index === 0}
                    />
                ))}
            </View>

            <View style={styles.signup}>
                <Text>Didn't receive Code? </Text>
                <TouchableOpacity>
                    <Text style={styles.touchable}>Resend code</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={styles.secondaryButton} 
                onPress={handleVerify}
            >
                <Text style={styles.secondaryButtonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VerifyOTP;