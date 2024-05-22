import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  blankSpace: {
    height: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  schoolName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  schoolAddress: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    fontSize: 10,
    color: '#FFD700',
  },
  rating: {
    fontSize: 12,
    color: '#000',
  },
  tabsContainer: {
    marginTop: 15,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000',
  },
  tabText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  packagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  packageContainer: {
    padding: 15,
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: '#B2BEB5',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  packageNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  packagePrice: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'purple',
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionsRow: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 1,
  },
  optionBox: {
    width: 100,
    height: 100,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  optionLabel: {
    fontSize: 14,
    marginTop: 0.25,
    textAlign: 'center',
  },
  optionImage: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});

export default styles;
