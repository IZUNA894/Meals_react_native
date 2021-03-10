import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import Colors from "./../constants/colors.js";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/headerButtons";

function filter() {
  return (
    <View style={styles.screen}>
      <Text>filter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default filter;

function mealRecipe(props) {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find((item) => mealId === item.id);
  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
}

filter.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTint: "white",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favoutite"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
          iconName="ios-menu"
        />
      </HeaderButtons>
    ),
  };
};
