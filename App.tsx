import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello'

type Props = {};

export default class App extends React.Component<Props> {
    render() {
        return (
          <View style={styles.container}>
              <Text>Hello react native</Text>
              <Hello name='Expo' enthusiasmLevel={10} />
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
