import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { Icon } from "react-native-elements";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";

export default function PersCredit(props) {
  const history = useHistory();
  const [amount, setAmount] = useState(4000);
  const [duration, setDuration] = useState(12);
  const [assurance, setAssurance] = useState(0);
  const [adminFees, setAdminFees] = useState(0);
  const [fees, setFees] = useState(0);
  const [mensualite, setMensualite] = useState(0);

  const creditInfo = {
    amount: amount,
    duration: duration,
    assurance: assurance,
    adminFees: adminFees,
    fees: fees,
    mensualite: mensualite,
  };

  const userInfo = props.location.state.userObj;

  function calculate(amount, duration) {
    var assur = parseFloat(0.71 * duration).toFixed(2);
    setAssurance(assur);
    var admFees = parseFloat(assur * 50).toFixed(2);
    setAdminFees(admFees);
    var cout = (amount * 10.52) / 100;
    setFees(cout);
    var mens = parseFloat((amount + cout) / duration).toFixed(2);
    setMensualite(mens);
  }

  function ask() {
    history.push({
      pathname: "/verify",
      state: {
        userInfo,
        creditInfo,
      },
    });
  }

  useEffect(() => {
    calculate(amount, duration);
  }, [amount, duration]);

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/bank-bg.jpg")}
    >
      <View style={styles.overlay}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Crédit Personnel</Text>
        </View>
        <View style={styles.sliders}>
          <View style={styles.slider}>
            <Text style={styles.amount}> 4 000 </Text>
            <Slider
              style={{ width: 230, height: 40 }}
              minimumValue={4000}
              maximumValue={500000}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={(amount) => {
                setAmount(amount);
              }}
            />
            <Text style={styles.amount}>500 000</Text>
          </View>
          <Text style={styles.amount}>Montant : {amount} DH </Text>
          <View style={styles.slider}>
            <Text style={styles.amount}>12 mois</Text>
            <Slider
              style={{ width: 230, height: 40 }}
              minimumValue={12}
              maximumValue={48}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={(duration) => {
                setDuration(parseInt(duration));
              }}
            />
            <Text style={styles.amount}>48 mois</Text>
          </View>
          <Text style={styles.amount}>Durée : {duration} Mois</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.item}>
            <Icon name="money" color="#017368" size={40} />
            <View style={styles.textItem}>
              <Text>Montant du crédit</Text>
              <Text style={styles.itemNumber}>{amount} DHS</Text>
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="timer-sand"
              size={40}
              color="#017368"
            />
            <View style={styles.textItem}>
              <Text>Durée du crédit</Text>
              <Text style={styles.itemNumber}>{duration} mois</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Ionicons name="umbrella-sharp" size={40} color="#017368" />
            <View style={styles.textItem}>
              <Text>Assurance</Text>
              <Text style={styles.itemNumber}>{assurance} DHS</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Feather name="folder" size={40} color="#017368" />
            <View style={styles.textItem}>
              <Text>Frais de dossier</Text>
              <Text style={styles.itemNumber}>{adminFees} DHS</Text>
            </View>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="money-bill-wave" size={40} color="#017368" />
            <View style={styles.textItem}>
              <Text>Coût global du crédit</Text>
              <Text style={styles.itemNumber}>{fees} DHS</Text>
            </View>
          </View>
          <View style={styles.mensualite}>
            <View style={styles.itemMens}>
              <MaterialIcons name="attach-money" size={50} color="#017368" />
              <View style={styles.textItemMens}>
                <Text style={styles.itemTextMens}>Mensualité du crédit</Text>
                <Text style={styles.itemNumberMens}>{mensualite} DHS</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              ask();
            }}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Demander</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 25,
  },
  titleText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  sliders: {
    width: "100%",
    marginTop: 20,
  },
  slider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    color: "white",
    textAlign: "center",
  },
  detailsContainer: {
    width: "90%",
    height: 350,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    marginVertical: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  item: {
    width: "45%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemNumber: {
    color: "#017368",
  },
  textItem: {
    marginLeft: 4,
  },
  mensualite: {
    backgroundColor: "white",
    width: "100%",
    height: 80,
    marginVertical: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemMens: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemNumberMens: {
    color: "#017368",
    fontSize: 20,
    fontWeight: "bold",
  },
  textItemMens: {
    marginLeft: 10,
  },
  itemTextMens: {
    fontSize: 22,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#017368",
    paddingVertical: 10,
    borderRadius: 60,
    width: "50%",
  },
  appButtonText: {
    fontSize: 13,
    color: "#FFF",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
