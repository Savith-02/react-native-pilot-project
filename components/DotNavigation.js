import React from 'react';
import { View } from 'react-native';
import styles from '../screen3styles';

const DotNavigation = ({ currentIndex }) => {
  return (
    <View style={styles.dotContainer}>
      <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
      <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
      <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
    </View>
  );
};

export default DotNavigation;
