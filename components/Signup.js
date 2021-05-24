import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox,
} from "react-native";

import MyButton from "./MyButton";
import firebase from "../config/config";
const db = firebase.firestore();

export default function Signup({ history }) {
  const [loading, setLoading] = useState(true)
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const userObj = {
    fname: fname,
    lname: lname,
    phone: phone,
    email: email,
  };
  useEffect(() =>
  //for animation loading 
  
  {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
  }, []) 
  function addUser() {
    // if (db) {
    //   db.collection("users").add({
    //     first_name: fname,
    //     last_name: lname,
    //     phone: phone,
    //     email: email,
    //   });
    // }
    history.push({
      pathname: "/credit",
      state: {
        userObj,
      },
    });
  }
  return (
  <>
      { loading ?
        (
          <View>
            <Text>Loading...</Text>
            <Image source={require("../assets/splash1.png")} />
          </View>
        )
        : (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.imgContainer}>
                <Image styles={styles.img} source={require("../assets/logo.png")} />
              </View>
              <View style={styles.title}>
                <Text style={styles.coloredTitle}>MES COORDONNÉES</Text>
                <Text style={styles.info}>
                  Renseigner les champs ci-dessous et passer à l'étape suivante !
              </Text>
              </View>
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
              <Text style={styles.info}>
                Conformément à la loi 09-08, vous disposez d'un droit d'accès, de
                rectification et d'opposition au traitement de vos données
                personnelles. Ce traitement a été autorisé par la CNDP sous le
                n°A-M-158/2020
            </Text>
              <View style={styles.terms}>
                <CheckBox value={isChecked} onValueChange={setIsChecked} />
                <Text style={styles.termsText}>
                  J'AI LU ET ACCEPTÉ LES CONDITIONS GÉNÉRALES D'UTILISATION ET LES
                  MENTIONS LÉGALES NOTAMMENT LA MENTION RELATIVE AUX DONNÉES À
                  CARACTÈRE PERSONNEL
              </Text>
              </View>
              <MyButton
                onPress={() => {
                  addUser();
                }}
                title="Simuler"
                disabled={!isChecked}
              />
            </View>
          </View>
      
        )
      }
        </>
  )
  
  

}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 25,
  },
  imgContainer: {
    height: 134,
    width: 66,
    backgroundColor: "#ed3b45",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  coloredTitle: {
    fontSize: 18,
    lineHeight: 28,
    color: "#ee3b45",
    fontWeight: "bold",
  },
  info: {
    fontSize: 11,
    width: "85%",
  },
  title: {
    width: 250,
    marginLeft: 20,
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: "80%",
    backgroundColor: "#f9fafd",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    marginVertical: 8,
  },
  terms: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 60,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  termsText: {
    fontSize: 8,
    width: "75%",
  },
});
