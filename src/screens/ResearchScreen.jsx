// screens/ResearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/global';
import Fonticons from '@expo/vector-icons/FontAwesome5';


const ResearchScreen = () => {
    const [projects, setProjects] = useState([
        {
            fundingAgency: '', isInternational: false, role: '', worth: '', title: '', startDate: '', endDate: '', isSubmitted: false
        }
    ]);
    const [collaborations, setCollaborations] = useState([
        { name: '', organization: '', isInternational: false, nature: '' }
    ]);

    const addProject = () => {
        setProjects([...projects, {
            fundingAgency: '', isInternational: false, role: '',
            worth: '', title: '', startDate: '', endDate: '', isSubmitted: false
        }]);
    };

    const addCollaboration = () => {
        setCollaborations([...collaborations, {
            name: '',
            organization: '',
            isInternational: false,
            nature: ''
        }]);
    };

    const handleProjectChange = (text, index, field) => {
        const newProjects = [...projects];
        newProjects[index][field] = text;
        setProjects(newProjects);
    };

    const handleCollaborationChange = (text, index, field) => {
        const newCollaborations = [...collaborations];
        newCollaborations[index][field] = text;
        setCollaborations(newCollaborations);
    };

    const handleSubmit = () => {
        console.log({ projects, collaborations });
    };

    return (
        <ScrollView >

            <View style={styles.container}>
                <View style={styles.headerContainer}>

                    <TouchableOpacity style={styles.backButton}>
                        <Fonticons name="arrow-left" size={20} color="rgb(0, 0, 0)" />
                    </TouchableOpacity>

                    <Text style={styles.screenName}>Research Activities</Text>
                    <View style={styles.headerSpacer} />

                </View>

                <Text style={styles.sectionTitle}>Research Projects</Text>
                {projects.map((project, index) => (
                    <View key={`project-${index}`} style={{ marginBottom: 20 }}>                        
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Funding Agency"
                            value={project.fundingAgency}
                            onChangeText={(text) => handleProjectChange(text, index, 'fundingAgency')}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Role (PI/Co-PI)"
                                value={project.role}
                                onChangeText={(text) => handleProjectChange(text, index, 'role')}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Worth (PKR)"
                                value={project.worth}
                                onChangeText={(text) => handleProjectChange(text, index, 'worth')}
                                keyboardType="numeric"
                            />
                        </View>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Project Title"
                            value={project.title}
                            onChangeText={(text) => handleProjectChange(text, index, 'title')}
                        />
                        <View style={styles.dateInput}>
                            <TextInput
                                style={[styles.inputbox, { flex: 1 }]}
                                placeholder="Start Date"
                                value={project.startDate}
                                onChangeText={(text) => handleProjectChange(text, index, 'startDate')}
                            />
                            <Text style={styles.dateText}>to</Text>
                            <TextInput
                                style={[styles.inputbox, { flex: 1 }]}
                                placeholder="End Date"
                                value={project.endDate}
                                onChangeText={(text) => handleProjectChange(text, index, 'endDate')}
                            />
                        </View>
                    </View>
                ))}
                <TouchableOpacity onPress={addProject} style={{ marginBottom: 20 }}>
                    <Text style={{ color: "rgb(38, 143, 125)" }}>+ Add Another Project</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Research Collaborations</Text>
                {collaborations.map((collab, index) => (
                    <View key={`collab-${index}`} style={{ marginBottom: 20 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Name of Collaborator"
                            value={collab.name}
                            onChangeText={(text) => handleCollaborationChange(text, index, 'name')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Organization"
                            value={collab.organization}
                            onChangeText={(text) => handleCollaborationChange(text, index, 'organization')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Nature of collaboration"
                            value={collab.nature}
                            onChangeText={(text) => handleCollaborationChange(text, index, 'nature')}
                        />
                    </View>
                ))}
                <TouchableOpacity onPress={addCollaboration} style={{ marginBottom: 20 }}>
                    <Text style={{ color: "rgb(38, 143, 125)" }}>+ Add Another Collaboration</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={handleSubmit}>
                    <Text style={styles.secondaryButtonText}>Save Research Information</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default ResearchScreen;