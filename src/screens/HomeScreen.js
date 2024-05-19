import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const HomeScreen = () => {
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [vehicleModalVisible, setVehicleModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState("Auto");

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationModalVisible(false); // Close the modal after selecting an option
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    setVehicleModalVisible(false); // Close the modal after selecting an option
  };

  const handleSearch = () => {
    // Perform search based on selectedLocation and selectedVehicle
    console.log("Searching for:", selectedLocation, selectedVehicle);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locate. Select. Drive.</Text>
      <Text style={styles.subtitle}>The perfect driving school is just a tap away!</Text>
      <Image
        source={require('./images/img1.png')}
        style={styles.image}
      />
      {/* Text box around location button */}
      <View style={styles.textBox}>
        <Ionicons name="location" size={24} color="grey" style={styles.icon} />
        <TouchableOpacity style={styles.button} onPress={() => setLocationModalVisible(true)}>
          <Text style={styles.buttonText}>{selectedLocation || 'Location'}</Text>
        </TouchableOpacity>
        <Ionicons name="chevron-down" size={24} color="grey" style={styles.icon} />
      </View>
      {/* Text box around vehicle type button */}
      <View style={styles.textBox}>
        <Ionicons name="car" size={24} color="grey" style={styles.icon} />
        <TouchableOpacity style={styles.button} onPress={() => setVehicleModalVisible(true)}>
          <Text style={styles.buttonText}>{selectedVehicle || 'Auto'}</Text>
        </TouchableOpacity>
        <Ionicons name="chevron-down" size={24} color="grey" style={styles.icon} />
      </View>
      {/* Search button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      {/* Location Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={locationModalVisible}
        onRequestClose={() => setLocationModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select a Location</Text>
            {/* Location dropdown options */}
            <TouchableOpacity onPress={() => handleLocationSelect("Borella")}>
              <Text>Borella</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLocationSelect("Rajagiriya")}>
              <Text>Rajagiriya</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLocationSelect("Battaramulla")}>
              <Text>Battaramulla</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLocationSelect("Thalawathugoda")}>
              <Text>Thalawathugoda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLocationSelect("Maharagama")}>
              <Text>Maharagama</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLocationSelect("Kadawatha")}>
              <Text>Kadawatha</Text>
            </TouchableOpacity>
            {/* Add more location options as needed */}
          </View>
        </View>
      </Modal>
      {/* Vehicle Type Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={vehicleModalVisible}
        onRequestClose={() => setVehicleModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select a Vehicle Type</Text>
            {/* Vehicle type dropdown options */}
            <TouchableOpacity onPress={() => handleVehicleSelect("Auto")}>
              <Text>Auto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVehicleSelect("Manual")}>
              <Text>Manual</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVehicleSelect("Three-Wheelers")}>
              <Text>Three-Wheelers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVehicleSelect("Buses")}>
              <Text>Buses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVehicleSelect("Lorries")}>
              <Text>Lorries</Text>
            </TouchableOpacity>
            {/* Add more vehicle type options as needed */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'purple'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color:'purple',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 10, // Adjust horizontal padding
    marginVertical: 8, // Adjust vertical margin
    marginHorizontal:70,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
