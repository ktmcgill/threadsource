import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Screens/Home";
import Product from "./Screens/Product";
import { api_key } from "./api_key";
// import Supplier from "./Screens/Supplier";

const routeConfigs = {
  Home: { screen: Home },
  Product: { screen: Product }
  // Supplier: { screen: Supplier }
};

const stackNavigatorConfigs = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    title: "threadsource",
    headerTitleStyle: {
      fontWeight: "100"
    }
  }
};

const AppNavigator = createStackNavigator(routeConfigs, stackNavigatorConfigs);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = { spinner: false, products: [] };

  fetchProducts = async number => {
    const request = await fetch(
      `https://api.airtable.com/v0/appT6qCTMd1xnTRqZ/Products?maxRecords=${number}&view=Published`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${api_key}` }
      }
    );
    const response = await request.json();
    this.setState({ products: response.records, spinner: false });
  };
  render() {
    return <AppContainer tester="test me" />;
  }
}
