import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../screen3styles';

const Packages = () => {
  return (
    <View>
      <View style={[styles.tabsContainer, styles.row]}>
        <View style={styles.row}>
          <FontAwesome5 name="tag" size={25} color="purple" />
          <Text style={[styles.tabText, { marginLeft: 5 }]}>Our Packages</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={[styles.tabText1, { color: 'purple' }]}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.packagesRow}>
        <LinearGradient
          colors={['#a4508b', '#5f0a87']}
          style={styles.packageContainer}
        >
          <Text style={styles.packageNumber}>01</Text>
          <Text style={styles.packageTitle}>Individual Package</Text>
          <Text style={styles.packagePrice}>Rs. 30,000.00</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#a4508b', '#5f0a87']}
          style={styles.packageContainer}
        >
          <Text style={styles.packageNumber}>02</Text>
          <Text style={styles.packageTitle}>VIP Package - Pick up & drop off</Text>
          <Text style={styles.packagePrice}>Rs. 45,000.00</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Packages;
