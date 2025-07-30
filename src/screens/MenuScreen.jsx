// screens/MenuScreen.js

import { View, FlatList, TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from '../styles/global';

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    { title: 'Personal Information', screen: 'PersonalInfo' },
    { title: 'Biosketch', screen: 'BioSketch' },
    { title: 'Education & Training', screen: 'Education' },
    { title: 'Research Activities', screen: 'Research' },
    { title: 'Publications', screen: 'Publications' },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>WUM Faculty E-Portal</Text>
        <FlatList
          data={menuItems}        
          renderItem={({ item }) => (
            <TouchableOpacity  style={styles.menuItem}>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MenuScreen;