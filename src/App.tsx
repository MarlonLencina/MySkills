import React, {Fragment} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Home } from "./pages/home";

export const App = () => {

  return (
    <>
    <StatusBar
    barStyle="light-content"
    />
    <Home/>
    </>
  )

}

