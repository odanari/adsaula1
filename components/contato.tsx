import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export function Contato() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  const validaLogin = () => {
    if(usuario === 'admin' && password == 'admin') {
      alert('sucesso!');
      Toast.show({
        type: 'success',
        text1: 'Login bem sucedido!',
        text2: 'Bem-vindo de volta, admin!'
      })
    }else{
      alert('Usuario ou senha invalidos!');
      Toast.show({
        type: 'error',
        text1: 'Login falhou!',
        text2: 'Usuario ou senha invalidos!'
      })
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input} 
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={validaLogin}>
        <Text>Confirmar</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}
export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  const validaLogin = () => {
    if(usuario === 'admin' && password == 'admin') {
      alert('sucesso!');
      Toast.show({
        type: 'success',
        text1: 'Login bem sucedido!',
        text2: 'Bem-vindo de volta, admin!'
      })
    }else{
      alert('Usuario ou senha invalidos!');
      Toast.show({
        type: 'error',
        text1: 'Login falhou!',
        text2: 'Usuario ou senha invalidos!'
      })
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input} 
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={validaLogin}>
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