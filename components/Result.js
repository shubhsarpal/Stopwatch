import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./util";
import { SafeAreaProvider } from 'react-native-safe-area-context';
function Result({ results }) {
  
  return (
    <SafeAreaProvider>
    <ScrollView>
      <View style={styles.resultItem} />
{results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}
          </Text>
<Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: { color: "#000000" }, 
});
export default React.memo(Result);