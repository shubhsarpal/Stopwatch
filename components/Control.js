import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#fff" : "#fff" },
        ]}//#333333  #1c1c1e
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#000" : "#000" }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>
<TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#ff2d55" : "#21B6A8" },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#fff" : "#fff" }}> 
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
      </>
  );
}
const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};
const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
  },
});
export default React.memo(Control);