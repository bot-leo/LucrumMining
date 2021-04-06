import React from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'

import Routes from './src/routes/Routes'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:23,
  },
});
