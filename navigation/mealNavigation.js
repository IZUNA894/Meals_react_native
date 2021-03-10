import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
//Screens
import Catergories from "./../screens/catergories";
import CatergoryMeals from "./../screens/catergoryMeal";
import MealRecipe from "./../screens/mealRecipe";
import Filter from "./../screens/filter";
import Colors from "./../constants/colors.js";
import FavouriteMeals from "./../screens/favouriteMeals";

const mealNavigator = createStackNavigator(
  {
    Catergories: Catergories,
    CatergoryMeals: CatergoryMeals,
    MealRecipe: MealRecipe,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: "white",
    },
  }
);

const FavouriteMealsNavigator = createStackNavigator(
  {
    Favourite: {
      screen: FavouriteMeals,
    },
    MealRecipe: {
      screen: MealRecipe,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: "white",
    },
  }
);

const tabBarScreens = {
  Meals: {
    screen: mealNavigator,
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => (
        <Ionicons
          name="ios-restaurant"
          color={tabBarInfo.tintColor}
          size={24}
        />
      ),
      tabBarColor: Colors.primary,
    },
  },
  Favourite: {
    screen: FavouriteMealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabBarInfo) => (
        <Ionicons name="ios-star" color={tabBarInfo.tintColor} size={24} />
      ),
      tabBarColor: Colors.accent,
    },
  },
};

const mealTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabBarScreens, {
        activeTintColor: Colors.accent,
        shifting: true,
      })
    : createBottomTabNavigator(tabBarScreens, {
        tabBarOptions: {
          activeTintColor: "white",
          inactiveBackgroundColor: "#f5f5f5",
        },
      });

const mainNvaigator = createDrawerNavigator({
  Home: {
    screen: mealTabNavigator,
  },
  Filter: {
    screen: Filter,
  },
  MainScene: {
    screen: mealTabNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  OtherScene: {
    screen: Filter,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
});
export default createAppContainer(mealTabNavigator);
