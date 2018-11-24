import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";

// the app component simply loads

export default class extends React.Component {
  _listHeader = () => <Text style={styles.list_header}>NEW PRODUCTS</Text>;

  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    const { products } = this.props;
    return (
      <FlatList
        ListHeaderComponent={this._listHeader}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate("Product", { name: item.key })}
          >
            <View style={styles.list_item}>
              <Text>{item.key}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  list_header: {
    textAlign: "center"
  },
  list_item: {
    borderColor: "black",
    borderWidth: 2,
    padding: 32,
    margin: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});
