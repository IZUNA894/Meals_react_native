import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import Colors from "./../constants/colors.js";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/headerButtons";

function catergoryMeal(props) {
  const catergoryId = props.navigation.getParam("catergoryId");
  let meals = MEALS.filter((item) => item.catergoryIds.includes(catergoryId));

  const displayMeals = (itemData) => {
    var MyTouchable = TouchableOpacity;
    // if (Platform.OS === "android") MyTouchable = TouchableNativeFeedback;

    return (
      <View style={styles.listItem}>
        <MyTouchable
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "MealRecipe",
              params: { mealId: itemData.item.id },
            });
          }}
        >
          <View>
            <View style={styles.container}>
              <ImageBackground
                source={{ uri: itemData.item.imageUrl }}
                style={styles.image}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{itemData.item.title}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.mealRowContainer}>
              <Text style={styles.mealRow}>{itemData.item.duration}m</Text>
              <Text style={styles.mealRow}>{itemData.item.complexity}</Text>
              <Text style={styles.mealRow}>{itemData.item.affordability}</Text>
            </View>
          </View>
        </MyTouchable>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Text>Catergory Meal</Text>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        data={meals}
        renderItem={displayMeals}
      />
    </View>
  );
}

catergoryMeal.navigationOptions = (navigationData) => {
  const catergoryId = navigationData.navigation.getParam("catergoryId");
  const catergory = CATEGORIES.find((item) => catergoryId === item.id);
  return {
    headerTitle: catergory.title,
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  listItem: {
    width: "100%",
    height: 200,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  container: {
    height: "85%",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    textAlign: "center",
    fontFamily: "openSansBold",
    paddingVertical: 5,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  mealRowContainer: {
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "15%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mealRow: {
    fontSize: 20,
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default catergoryMeal;
