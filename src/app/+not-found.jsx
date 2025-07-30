import { View, Text , TouchableOpacity, } from "react-native";
import styles from "../styles/global";
function NotFound() {
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text style={{ fontSize: 24, fontWeight: "bold" }}>404 - Not Found</Text>
            <Text style={{ marginTop: 10 }}>The page you are looking for does not exist.</Text>


            <TouchableOpacity style={styles.secondaryButton} >
                <Text style={styles.secondaryButtonText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NotFound;