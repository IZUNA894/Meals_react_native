import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import Colors from "./../constants/colors.js";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/headerButtons";

function mealRecipe(props) {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find((item) => mealId === item.id);
  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
}

mealRecipe.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const meal = MEALS.find((item) => mealId === item.id);
  return {
    headerTitle: meal.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTint: "white",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favoutite"
          onPress={() => {
            console.log("favoutite");
          }}
          iconName="ios-star"
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default mealRecipe;
