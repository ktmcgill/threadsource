import React from "react";
import { View, Text } from "react-native";

export default class extends React.Component {
  render() {
    const productName = this.props.navigation.getParam(
      "name",
      "NO PRODUCT FOUND"
    );
    return (
      <View>
        <Text>PRODUCT: {productName}</Text>
      </View>
    );
  }
}
