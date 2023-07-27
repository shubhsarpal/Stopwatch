import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const MyHeader = () => {
return (
    
    <SafeAreaProvider>
    <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.Content title="Stopwatch" style={{ alignItems: 'center'}}/>
    </Appbar.Header>
    </SafeAreaProvider>
  );
};
export default MyHeader;