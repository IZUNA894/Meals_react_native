import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "./../constants/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

export default function headerButtons(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
}

const styles = StyleSheet.create({});
