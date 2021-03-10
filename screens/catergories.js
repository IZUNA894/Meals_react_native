import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { CATEGORIES } from "./../data/dummy-data";
import Colors from "./../constants/colors.js";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/headerButtons";

function catergories(props) {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android") Touchable = TouchableNativeFeedback;

  const renderGrid = (itemData) => {
    return (
      <View style={styles.container}>
        <Touchable
          style={styles.gridItem}
          onPress={() => {
            props.navigation.navigate({
              routeName: "CatergoryMeals",
              params: {
                catergoryId: itemData.item.id,
              },
            });
          }}
        >
          <View
            style={{ backgroundColor: itemData.item.color, ...styles.item }}
          >
            <Text style={styles.gridItemText}>{itemData.item.title}</Text>
          </View>
        </Touchable>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={CATEGORIES} renderItem={renderGrid} numColumns={2} />
    </View>
  );
}

catergories.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Catergories",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTint: "white",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favoutite"
          onPress={() => {
            console.log(navigationData.navigation);
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
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  gridItem: {
    flex: 1,
  },
  gridItemText: {
    fontSize: 20,
    color: "black",
    textAlign: "right",
  },
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 8,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default catergories;
