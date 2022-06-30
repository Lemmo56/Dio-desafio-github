import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';

const image8Bits = 'https://preview.redd.it/nx1tgrs4dx481.png?width=640&crop=smart&auto=webp&s=3805d392b8e49810c600521bf4cb45b273610b5f';
const colorGithub = '#010409';
const urlNop = 'https://www.instagram.com/nop_pixels/';
const App = ()=>{
    //SafeArea garante que o app não utilize partes da tela que não funcionam.
    //StatusBar: ela configura a barra de status, que é a barra acima do app, que mostra o horário, a bateria, o sinal de wi-fi, etc. Da para deixar ela escura com dark-content
    //A tag de Style consegue receber um array de styles, sendo assim, mais de um style pode ser aplicado a mesma chave.
    const handlePressGoToInsta= async ()=>{
    const res = await Linking.canOpenURL(urlNop);
    console.log('verificando link');
    if(res){
        console.log('link aprovado');
        Linking.openURL(urlNop);
    }
    }
    return(
        <SafeAreaView style={style.container}> 
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/> 
            <View style={style.content}>
                <Image style={style.avatar} source={{uri: image8Bits}}/>
                <Text accessibilityLabel="Nome: NOP" style={[style.defaultText, style.mainName]}>
                    NOP
                </Text>
                <Text accessibilityLabel="Nickname: nop_pixels" style={[style.defaultText, style.nickName]}>
                    nop_pixels
                    </Text>
                <Text accessibilityLabel="Description: Artist - 
                    Uses the Aseprite to create his pixelarts and animations" style={[style.defaultText, style.description]}>
                        Artist - 
                    Uses the Aseprite to create his pixelarts and animations
                </Text>
               <Pressable onPress={handlePressGoToInsta}>
                <View>
                    <Text style={style.bottom}>
                        Open on Instagram
                    </Text>
                </View>
                </Pressable> 
            </View>
        </SafeAreaView>
    );
};
// o código é mostrado em coluna, ou seja, caso eu queira que oq estiver aparecendo na tela se repita, basta copiar e colar o mesmo código ainda dentro do return e dentro da safearea, se possível.
export default App;


const style = StyleSheet.create({
    container: { // São feito em coluna inicialmente
        backgroundColor: colorGithub,
        flex: 1, // expandir para tela inteira
        justifyContent: 'center',
        //Caso deseje colocar o código em linhas: flexDirection: 'row',
    },
    content: {
        
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 450,
        width: 395,
        borderRadius: 50,
    },
    defaultText:{
        color: 'white',
    },

    mainName:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickName: {
        marginBottom: 10,
        fontStyle: "italic",
        fontSize: 20,
    },

    description:{
        fontWeight: "bold",
        fontSize: 18,
    },
    bottom: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 20,
    },
    /*
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        parte do código de texto do hello world.
    },
    */
});