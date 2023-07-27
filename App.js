import { StyleSheet, View } from 'react-native';
import StopWatch from './components/Stopwatch';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <StopWatch/>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});