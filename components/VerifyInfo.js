import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import MyButton from "./MyButton";
import { Modal } from "react-native";
import { useHistory } from "react-router-native";

export default function verifyInfo(props) {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const [fname, setFname] = useState(props.location.state.userInfo.fname);
  const [lname, setLname] = useState(props.location.state.userInfo.lname);
  const [phone, setPhone] = useState(props.location.state.userInfo.phone);
  const [email, setEmail] = useState(props.location.state.userInfo.email);

  const [code, setCode] = useState("");

  var randomCode = "0000";

  function send() {
    console.log("sent");
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Taper le code ici !</Text>
            <Text style={styles.modalTextInfo}>*default "0000"</Text>
            <TextInput
              style={[styles.input, styles.modalInput]}
              onChangeText={setCode}
              value={code}
              placeholder="Code..."
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (code == randomCode) {
                  setModalVisible(!modalVisible);
                  history.push("/success");
                }
              }}
            >
              <Text style={styles.textStyle}>Vérifier</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <FontAwesome name="vcard" size={50} color="#ed3b45" />
        <Text style={styles.mainTitle}>Validation de mes COORDONNÉES</Text>
        <Text>Vérifier, puis valider vos informations</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setFname}
          value={fname}
          placeholder="Prénom..."
        />
        <TextInput
          style={styles.input}
          onChangeText={setLname}
          value={lname}
          placeholder="Nom..."
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Tél..."
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email..."
        />
        <MyButton
          style={styles.button}
          onPress={() => {
            send();
            setModalVisible(true);
          }}
          title="Valider"
          disabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    display: "flex",
    backgroundColor: "#F7F7F7",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainTitle: {
    textTransform: "uppercase",
    color: "#ed3b45",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 40,
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: "80%",
    backgroundColor: "white",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    marginVertical: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#ed3b45",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
  },
  modalTextInfo: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 12,
    color: "gray",
  },
  modalInput: {
    marginBottom: 30,
    textAlign: "center",
  },
});
