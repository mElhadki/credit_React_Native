import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function success() {
  return (
    <View style={styles.container}>
      <Image styles={styles.img} source={require("../assets/success.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
