import { StyleSheet, Text, View ,StatusBar } from 'react-native';
import InshortTabs from './components/InshortTabs';

export default function App() {
  return (
    <View style={{...styles.container,backgroundColor:'#282C35'}}>
      <InshortTabs></InshortTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});
