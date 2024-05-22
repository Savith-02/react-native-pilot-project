import React from 'react';
import { View, Text } from 'react-native';
import styles from '../screen3styles';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.schoolName}>Samare Driving School</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>{'⭐️⭐️⭐️⭐️⭐️'}</Text>
          <Text style={styles.rating}> 4.9/5</Text>
        </View>
      </View>
      <Text style={styles.schoolAddress}>No. 128, Kotta Road, Borella</Text>
      <Text style={styles.schoolAddress}>011 287 6760</Text>
    </View>
  );
};

export default Header;
