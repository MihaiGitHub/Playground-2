import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
const myIcon = <Icon name="whatsapp" size={30} color="#900" />;

const App = () => {
  const [mobileNumber, setMobileNumber] = useState(6022919251);
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    "I would like to inquire about the property"
  );

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert("Please insert correct WhatsApp number");
    //   return;
    // }

    let url = "whatsapp://send?text=" + whatsAppMsg + "&phone=1" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}
        >
          <Text style={styles.buttonTextStyle}>
            {" "}
            {myIcon} Send WhatsApp Message
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
