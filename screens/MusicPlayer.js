import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={30} />
      <Text>React Native MusicPlayer</Text>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
