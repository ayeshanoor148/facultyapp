// screens/PersonalInfoScreen.js
import { useState } from "react";
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import styles, { primaryColor } from '../styles/global';
import Fonticons from '@expo/vector-icons/FontAwesome5';
import Anticons from '@expo/vector-icons/AntDesign';


const PersonalInformation = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [researchArea, setResearchArea] = useState('');
    const [isDualNationality, setIsDualNationality] = useState(false);
    const [researcherId, setResearcherId] = useState('');
    const [orcidId, setOrcidId] = useState('');
    const [googleScholar, setGoogleScholar] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [bio, setBio] = useState('');


    const handleSubmit = () => {
        // Handle form submission
        console.log({
            name,
            title,
            subject,
            researchArea,
            isDualNationality,
            researcherId,
            orcidId,
            googleScholar,
            email,
            contact,
            bio,
        });
    };


    const router = useRouter();

    return (
        <ScrollView >
            <View style={styles.container}>






                <View style={styles.headerContainer}>

                    <TouchableOpacity style={styles.backButton}>
                        <Fonticons name="arrow-left" size={20} color="rgb(0, 0, 0)" />
                    </TouchableOpacity>

                    <Text style={styles.screenName}>Personal Information</Text>


                    {/* <TouchableOpacity>
                    <Anticons name="clear" size={32} color="black" />
                </TouchableOpacity> */}


                    <TouchableOpacity>  <Text>Clear</Text> </TouchableOpacity>

                    <View style={styles.headerSpacer} />

                </View>



                <View style={styles.AutofillContainer} >


                    <Text>AUTOFILL APPLICATION</Text>
                    <Text>Save time by importing your resume in one of the following formats: .pdf, .doc, .docx .odt, or .rtf.</Text>


                    <TouchableOpacity style={styles.secondaryButton} >
                        <Text style={styles.secondaryButtonText}>Import resume from</Text>
                    </TouchableOpacity>

                </View>



                <Text style={{ marginBottom: -10, marginTop: 25, color: '#666' }}>
                    *Required fields
                </Text>

                <Text style={styles.sectionTitle}>Basic Information</Text>

                <TextInput
                    style={styles.inputbox}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="Academic title/Designation"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="Subject/Major, Specialization"
                    value={subject}
                    onChangeText={setSubject}
                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="Research area"
                    value={researchArea}
                    onChangeText={setResearchArea}
                />

                <View style={styles.switchContainer}>


                    <Switch
                        value={isDualNationality}
                        onValueChange={setIsDualNationality}
                        trackColor={{ false: "#767577", true: "rgb(191, 233, 229)" }}
                        thumbColor={isDualNationality ? "rgb(38, 143, 125)" : "#f4f3f4"}
                    />

                    <Text style={styles.switchText}>Dual Nationality</Text>
                </View>

                <Text style={styles.sectionTitle}>Research Profiles</Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Researcher ID/URL"
                    value={researcherId}
                    onChangeText={setResearcherId}
                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="ORCID ID/URL"
                    value={orcidId}
                    onChangeText={setOrcidId}
                />
                <TextInput

                    style={styles.inputbox}
                    placeholder="Google Scholar Link"
                    value={googleScholar}
                    onChangeText={setGoogleScholar}
                />

                <Text style={styles.sectionTitle}>Contact Information</Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="Contact #"
                    value={contact}
                    onChangeText={setContact}
                    keyboardType="phone-pad"
                />



                <Text style={styles.sectionTitle}>Biosketch</Text>


                <Text style={{ marginBottom: 10, color: '#666' }}>
                    (About 100-200 words)
                </Text>
                <TextInput
                    style={[styles.inputbox, styles.textArea]}
                    placeholder="Write your biosketch here..."
                    value={bio}
                    onChangeText={setBio}
                    multiline
                />

                <TouchableOpacity style={styles.secondaryButton} onPress={handleSubmit}>
                    <Text style={styles.secondaryButtonText}>Save Information</Text>
                </TouchableOpacity>




            </View>
        </ScrollView>
    );
};

export default PersonalInformation;