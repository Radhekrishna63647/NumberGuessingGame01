import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NumberGuessingGame() {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('अपना अनुमान लगाएं (1-100)');
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (userGuess === secretNumber) {
      Alert.alert(
        'बधाई हो! 🎉', 
        `आपने ${attempts + 1} प्रयासों में सही अनुमान लगाया।`,
        [{ text: 'नया खेल', onPress: resetGame }]
      );
    } else if (userGuess < secretNumber) {
      setMessage('अधिक बड़ा नंबर चुनें');
    } else {
      setMessage('कम बड़ा नंबर चुनें');
    }
  };

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('अपना अनुमान लगाएं (1-100)');
    setAttempts(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>नंबर अनुमान खेल</Text>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="अपना अनुमान डालें"
      />
      <Button title="जाँच करें" onPress={checkGuess} />
      <Text style={styles.attempts}>प्रयास: {attempts}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    color: 'blue'
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5
  },
  attempts: {
    marginTop: 20,
    fontSize: 16
  }
});
