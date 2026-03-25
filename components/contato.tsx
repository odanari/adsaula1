import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { supabase } from '../lib/supabase';

function Auth() {
  const [email, setUsuario] = useState('')
  const [password, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  
async function signInWithEmail() {
  setLoading(true)
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error) {
    setUsuario('');
    setSenha('');
    Alert.alert(error.message);
  }
  setLoading(false)
}
}

async function signUpWithEmail(email: string, password: string) {
  const [loading, setLoading] = useState(false);
  setLoading(true);
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) Alert.alert(error.message);
  if (!session) Alert.alert('Please check your inbox for usuario verification!');
  setLoading(false);
};

export function Contato() {
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  const validaLogin = () => {
    if(usuario === 'admin' && password === 'admin') {
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
    <Toast />
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