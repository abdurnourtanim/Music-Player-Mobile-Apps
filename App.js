import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import MusicPlayer from "./screens/MusicPlayer";

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
