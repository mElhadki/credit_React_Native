import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function MyButton({ onPress, title, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        disabled ? styles.appButtonContainerDisabled : styles.appButtonContainer
      }
      disabled={disabled}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ed3b45",
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: "50%",
  },
  appButtonContainerDisabled: {
    elevation: 8,
    backgroundColor: "gray",
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: "50%",
  },
  appButtonText: {
    fontSize: 15,
    color: "#FFF",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
