import { StyleSheet } from "react-native";

const primaryColor = "rgb(38, 143, 125)";
const white = '#fff';
const secondaryColor = '#666';
const black = 'rgb(0, 0, 0)';
const inputIconColor = '#888';
const styles = StyleSheet.create({

  topSpacer: {
    marginTop: 50
  },

  container: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    justifyContent: "center",
  },



  center: {
    alignItems: "center",
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 17,
  },

  title: {
    fontSize: 31,
    color: primaryColor,
    fontWeight: 'bold',
    marginBottom: 17,
  },

  description: {
    fontSize: 15,
    color: secondaryColor,
    marginTop: -12,
    marginBottom: 18,

  },

  subheading: {
    fontSize: 15,
    color: secondaryColor,
    marginTop: -10,
    marginBottom: 50,
  },
  inputbox: {

    height: 50,
    borderColor: primaryColor,
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    backgroundColor: white,
    fontSize: 16,
  },

  secondaryButton: {
    backgroundColor: primaryColor,
    padding: 15,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 14,
  },

  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: "center",
    marginTop: 15,
  },


  googleIcon: {
    height: 47,
    width: 47
  },

  iconContainer: {

    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 5, // optional for rounded corners
    padding: 8, // optional for some spacing
    marginHorizontal: 5, // optional for spacing between icons
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',

  },
  dividerText: {
    paddingHorizontal: 10,
    color: '#888',

  },

  OTPcontainer: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white,
  },
  centerContainer: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    justifyContent: "center",
    backgroundColor: white,
    alignSelf: "center",
    alignItems: "center"
  },


  AutofillContainer: {
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 4,
    padding: 12,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  OTPbox: {
    height: 50,
    width: 50,
    borderColor: primaryColor,
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    backgroundColor: white,
    fontSize: 16,

  },

  inputBoxTitle: {
    color: primaryColor,
    fontSize: 14,
    marginBottom: 5,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
    marginTop: -20
  },

  halfInput: {
    width: '48%',
  },

  screenName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1, // Takes remaining space
  },

  headerSpacer: {
    width: 24, // Same as backButton for symmetry
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
  },

  oneLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    marginLeft: 5,
    fontSize: 15,
  },

  touchable: {
    color: primaryColor,
    fontSize: 15,
    textDecorationLine: "underline",
  },

  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginRight: 8,
  },


  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    marginHorizontal: 10,
    color: '#666',
  },

  menuItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },

  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 14,
  },

  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Adjust this percentage as needed
    alignSelf: 'center',
    marginVertical: 20,
    marginBottom: 20
  },

});

export default styles;