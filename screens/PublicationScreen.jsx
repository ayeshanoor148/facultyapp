// screens/PublicationsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import styles, { primaryColor } from '../styles/global';
import Fonticons from '@expo/vector-icons/FontAwesome5';

const PublicationsScreen = () => {
    const [publications, setPublications] = useState([
        {
            authors: '',
            title: '',
            journal: '',
            year: '',
            volume: '',
            impactFactor: '',
            doi: '',
            isInternational: false,
            isHecRecognized: false
        }
    ]);
    const [books, setBooks] = useState([
        { title: '', author: '', date: '', publisher: '', isInternational: false }
    ]);
    const [chapters, setChapters] = useState([
        { title: '', author: '', book: '', date: '', publisher: '' }
    ]);

    const addPublication = () => {
        setPublications([...publications, {
            authors: '',
            title: '',
            journal: '',
            year: '',
            volume: '',
            impactFactor: '',
            doi: '',
            isInternational: false,
            isHecRecognized: false
        }]);
    };

    const addBook = () => {
        setBooks([...books, {
            title: '',
            author: '',
            date: '',
            publisher: '',
            isInternational: false
        }]);
    };

    const addChapter = () => {
        setChapters([...chapters, {
            title: '',
            author: '',
            book: '',
            date: '',
            publisher: ''
        }]);
    };

    const handlePublicationChange = (text, index, field) => {
        const newPublications = [...publications];
        newPublications[index][field] = text;
        setPublications(newPublications);
    };

    const handleBookChange = (text, index, field) => {
        const newBooks = [...books];
        newBooks[index][field] = text;
        setBooks(newBooks);
    };

    const handleChapterChange = (text, index, field) => {
        const newChapters = [...chapters];
        newChapters[index][field] = text;
        setChapters(newChapters);
    };

    const handleSubmit = () => {
        console.log({ publications, books, chapters });
    };

    return (
        <ScrollView >
            <View style={styles.container}>


                <View style={styles.headerContainer}>

                    <TouchableOpacity style={styles.backButton}>
                        <Fonticons name="arrow-left" size={20} color="rgb(0, 0, 0)" />
                    </TouchableOpacity>

                    <Text style={styles.screenName}>Publications</Text>
                    <View style={styles.headerSpacer} />

                </View>

                <Text style={styles.sectionTitle}>Research Publications</Text>
                {publications.map((pub, index) => (
                    <View key={`pub-${index}`} style={{ marginBottom: 20 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Authors (comma separated)"
                            value={pub.authors}
                            onChangeText={(text) => handlePublicationChange(text, index, 'authors')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Title"
                            value={pub.title}
                            onChangeText={(text) => handlePublicationChange(text, index, 'title')}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Journal Name"
                                value={pub.journal}
                                onChangeText={(text) => handlePublicationChange(text, index, 'journal')}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Year"
                                value={pub.year}
                                onChangeText={(text) => handlePublicationChange(text, index, 'year')}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Volume"
                                value={pub.volume}
                                onChangeText={(text) => handlePublicationChange(text, index, 'volume')}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Impact Factor"
                                value={pub.impactFactor}
                                onChangeText={(text) => handlePublicationChange(text, index, 'impactFactor')}
                            />
                        </View>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="DOI/URL"
                            value={pub.doi}
                            onChangeText={(text) => handlePublicationChange(text, index, 'doi')}
                        />


                        <View style={styles.switchContainer}>
                            <Switch
                                value={pub.isInternational}
                                onValueChange={(value) => {
                                    const newPubs = [...publications];
                                    newPubs[index].isInternational = value;
                                    setPublications(newPubs);

                                }}
                                trackColor={{ false: "#767577", true: "rgb(191, 233, 229)" }}
                                thumbColor={pub.isInternational ? "rgb(38, 143, 125)" : "#f4f3f4"}
                            />
                            <Text style={styles.switchText}>International Journal</Text>
                        </View>


                        <View style={styles.switchContainer}>
                            <Switch
                                value={pub.isHecRecognized}
                                onValueChange={(value) => {
                                    const newPubs = [...publications];
                                    newPubs[index].isHecRecognized = value;
                                    setPublications(newPubs);
                                }}
                                trackColor={{ false: "#767577", true: "rgb(191, 233, 229)" }}
                                thumbColor={pub.isHecRecognized ? "rgb(38, 143, 125)" : "#f4f3f4"}
                            />
                            <Text style={styles.switchText}>HEC Recognized</Text>
                        </View>
                    </View>
                ))}


                <TouchableOpacity onPress={addPublication} style={{ marginBottom: 20 }}>
                    <Text style={{ color: "rgb(38, 143, 125)" }}>+ Add Another Publication</Text>
                </TouchableOpacity>


                <Text style={styles.sectionTitle}>Books Published</Text>
                {books.map((book, index) => (
                    <View key={`book-${index}`} style={{ marginBottom: 20 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Title"
                            value={book.title}
                            onChangeText={(text) => handleBookChange(text, index, 'title')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Author/Editor"
                            value={book.author}
                            onChangeText={(text) => handleBookChange(text, index, 'author')}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Date of Publishing"
                                value={book.date}
                                onChangeText={(text) => handleBookChange(text, index, 'date')}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Publishing Agency"
                                value={book.publisher}
                                onChangeText={(text) => handleBookChange(text, index, 'publisher')}
                                
                            />
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch
                                value={book.isInternational}
                                onValueChange={(value) => {
                                    const newBooks = [...books];
                                    newBooks[index].isInternational = value;
                                    setBooks(newBooks);
                                }}
                                trackColor={{ false: "#767577", true: "rgb(191, 233, 229)" }}
                                thumbColor={book.isInternational ? "rgb(38, 143, 125)" : "#f4f3f4"}
                                
                            />
                            <Text style={styles.switchText}>International</Text>
                        </View>
                    </View>
                ))}
                <TouchableOpacity onPress={addBook} style={{ marginBottom: 20 }}>
                    <Text style={{ color: "rgb(38, 143, 125)" }}>+ Add Another Book</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Chapters Published in Books</Text>
                {chapters.map((chapter, index) => (
                    <View key={`chapter-${index}`} style={{ marginBottom: 20 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Title"
                            value={chapter.title}
                            onChangeText={(text) => handleChapterChange(text, index, 'title')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Author Name"
                            value={chapter.author}
                            onChangeText={(text) => handleChapterChange(text, index, 'author')}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Book Name"
                            value={chapter.book}
                            onChangeText={(text) => handleChapterChange(text, index, 'book')}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Date of Publishing"
                                value={chapter.date}
                                onChangeText={(text) => handleChapterChange(text, index, 'date')}
                            />
                            <TextInput
                                style={[styles.inputbox, styles.halfInput]}
                                placeholder="Publishing Agency"
                                value={chapter.publisher}
                                onChangeText={(text) => handleChapterChange(text, index, 'publisher')}
                            />
                        </View>
                    </View>
                ))}
                <TouchableOpacity onPress={addChapter} style={{ marginBottom: 20 }}>
                    <Text style={{ color: "rgb(38, 143, 125)" }}>+ Add Another Chapter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={handleSubmit}>
                    <Text style={styles.secondaryButtonText}>Save Publications</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PublicationsScreen;