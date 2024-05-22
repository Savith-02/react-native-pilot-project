import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Packages from './Packages';
import DotNavigation from './DotNavigation';
import Options from './Options';
import styles from '../screen3styles';

const DrivingSchoolApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blankSpace} />
      <Header />
      <Packages />
      <DotNavigation currentIndex={0} />
      <Options />
    </View>
  );
};

export default DrivingSchoolApp;
