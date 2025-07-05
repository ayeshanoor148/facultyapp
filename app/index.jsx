
import { ScrollView, View } from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from "../screens/SignUp";
import VerifyOTP from '../screens/VerifyOTP';
import PasswordChanged from '../screens/PasswordChanged';
import PublicationsScreen from '../screens/PublicationScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import PersonalInformation from '../screens/PersonalInformation';
import EducationScreen from '../screens/EducationScreen';
import ResearchScreen from '../screens/ResearchScreen';
import MenuScreen from '../screens/MenuScreen';
const app = () => {
    return (
        <ScrollView>


            
            <EducationScreen />
            <PublicationsScreen />
           <ResearchScreen/>
            <PersonalInformation />
            <SignUp />
            <SignIn />
            <VerifyOTP />
            <MenuScreen />
            <ForgotPassword />
            <ResetPassword />
            <PasswordChanged />


        </ScrollView>
    );
}
export default app;