import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import imagex from './assets/Icons/eco-light-off.png'; // da para fazer isso por um require('endereço da imagem')
import imagix from './assets/Icons/eco-light.png';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

const App = () =>{
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() =>{
    //Liga Flash do Celular
    return () => Alert.alert('Atualizou o componente ' + toggle);
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() =>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle)
    });
    // Essa função vai ser chamada quando o componente dor desmontado
    return () => subscription.remove();
  }, [])


  return(

    <View style={toggle ? style.container : style.containerLight}>
      <TouchableOpacity onPress={handleChangeToggle}>
      <Image style={toggle ? style.lightingOff : style.lightingOn} source={toggle ? imagex : imagix} />

      <Image style={style.dioLogo} source={toggle ? require('./assets/Icons/logo-dio-white.png') : require('./assets/Icons/logo-dio.png')} />

    </TouchableOpacity>
  </View>

  );
}

export default App;

const style = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 110,
    height: 100,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 110,
    height: 100,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
});