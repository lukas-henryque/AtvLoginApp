import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/fotografia.png')} style={{width:110, height: 110}}/>
      <View>
        <TextInput style={styles.formulario} placeholder="Telefone, nome de usuário ou e-mail:"></TextInput>
        <TextInput style={styles.formulario} placeholder="Senha:"/>
        <TouchableOpacity style={styles.button}>
        <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={{alignItems:'flex-end', paddingTop: 15}}>
        <Text style={{color: 'blue'}}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  formulario:{
    color: 'white',
    marginTop:20,
    backgroundColor: '#efefef',
    width: 350,
    borderRadius: 20,
  },
  button:{
    padding: 10,
    marginTop: 20,
    width: 350,
    alignItems: "center",
    backgroundColor: "#0087ff",
    borderRadius: 20,
    
  }
});
