// screens/EducationScreen.js
import { useState } from "react";
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles, { primaryColor } from '../styles/global';
import Fonticons from '@expo/vector-icons/FontAwesome5';

const EducationScreen = () => {
    const [degrees, setDegrees] = useState([{ university: '', degree: '', year: '', specialization: '' }]);
    const [trainings, setTrainings] = useState([{ type: '', subject: '', year: '', institution: '' }]);

    const addDegree = () => setDegrees([...degrees, { university: '', degree: '', year: '', specialization: '' }]);
    const addTraining = () => setTrainings([...trainings, { type: '', subject: '', year: '', institution: '' }]);

    const updateDegree = (index, field, value) => {
        const updated = [...degrees];
        updated[index][field] = value;
        setDegrees(updated);
    };

    const updateTraining = (index, field, value) => {
        const updated = [...trainings];
        updated[index][field] = value;
        setTrainings(updated);
    };


    const router = useRouter();

    return (
        <ScrollView >
            <View style={styles.container}>



                <View style={styles.headerContainer}>

                    <TouchableOpacity style={styles.backButton}>
                        <Fonticons name="arrow-left" size={20} color="rgb(0, 0, 0)" />
                    </TouchableOpacity>

                    <Text style={styles.screenName}>Education & Training</Text>
                    <View style={styles.headerSpacer} />

                </View>

                <Text style={styles.sectionTitle}>Education</Text>
                {degrees.map((degree, index) => (
                    <View key={index} style={{ marginBottom: 15 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="University"
                            value={degree.university}
                            onChangeText={(text) => updateDegree(index, 'university', text)}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Degree"
                                value={degree.degree}
                                onChangeText={(text) => updateDegree(index, 'degree', text)}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Year"
                                value={degree.year}
                                onChangeText={(text) => updateDegree(index, 'year', text)}
                                keyboardType="numeric"
                            />
                        </View>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Specialization"
                            value={degree.specialization}
                            onChangeText={(text) => updateDegree(index, 'specialization', text)}
                        />
                    </View>
                ))}
                <TouchableOpacity onPress={addDegree} style={{ marginBottom: 15 }}>
                    <Text style={{ color:"rgb(38, 143, 125)" }}>+ Add Degree</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Training</Text>
                {trainings.map((training, index) => (
                    <View key={index} style={{ marginBottom: 15 }}>
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Training Type"
                                value={training.type}
                                onChangeText={(text) => updateTraining(index, 'type', text)}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Year"
                                value={training.year}
                                onChangeText={(text) => updateTraining(index, 'year', text)}
                                keyboardType="numeric"
                            />
                        </View>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Subject"
                            value={training.subject}
                            onChangeText={(text) => updateTraining(index, 'subject', text)}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Institution"
                            value={training.institution}
                            onChangeText={(text) => updateTraining(index, 'institution', text)}
                        />
                    </View>
                ))}
                <TouchableOpacity onPress={addTraining} style={{ marginBottom: 15 }}>
                    <Text style={{ color:"rgb(38, 143, 125)"}}>+ Add Training</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default EducationScreen;