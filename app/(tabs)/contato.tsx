import { ThemedView } from "@/components/themed-view";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        style={styles.input}
      />

      <TextInput
        style={styles.input} secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Confirmar</Text>
      </TouchableOpacity>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  input:{
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2aa163',
  },

  title: {
    fontFamily: 'verdana',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#2aa163',
    width: '80%',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});