import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route, Redirect } from "react-router-native";

import Signup from "./components/Signup";
import PersCredit from "./components/PersCredit";
import VerifyInfo from "./components/VerifyInfo";
import Success from "./components/Success";

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/credit" component={PersCredit} />
        <Route exact path="/verify" component={VerifyInfo} />
        <Route exact path="/success" component={Success} />
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
