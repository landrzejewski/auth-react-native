import {useContext} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../store/auth-context';

function WelcomeScreen() {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{token}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
