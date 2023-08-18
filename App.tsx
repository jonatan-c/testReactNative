/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: 'center',
              width: 56,
              height: 18,
              fontFamily: 'Rubik',
              fontWeight: '400',
              color: 'rgba(112, 114, 119, 1)',
              marginLeft: 25,
              borderRadius: 4,
            }}>
            Español
          </Text>
        </View>
        <Image
          source={require('./src/Icons/Icons-bottom.png')}
          style={{width: 30, height: 30}}
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          width: '80%',
        }}>
        <Image
          source={require('./src/Icons/Isotype_Background.png')}
          style={{width: 100, height: 100, marginBottom: 40}}
        />
        <TextInput
          placeholder="Usuario, correo electrónico o teléfono"
          style={{
            width: '100%',
            height: 42,
            borderColor: 'rgba(60, 63, 68, 1)',
            borderWidth: 1.5,
            marginBottom: 20,
            color: 'white',
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
          placeholderTextColor="rgba(112, 114, 119, 1)"
        />
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: 42,
            marginBottom: 10,
          }}>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            style={{
              width: '100%',
              height: 42,
              borderColor: 'rgba(60, 63, 68, 1)',
              borderWidth: 1.5,
              borderRadius: 12,
              paddingLeft: 10,
              color: 'white',
            }}
            placeholderTextColor="rgba(112, 114, 119, 1)"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{position: 'absolute', right: 10, top: 10}}>
            <Image
              source={require('./src/Icons/eye-slash.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{marginBottom: 10, color: 'rgba(237, 237, 237, 1)'}}>
          ¿No recuerdas tus datos?
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '100%',
            backgroundColor: 'rgba(126, 102, 239, 1)',
            borderRadius: 21,
            marginTop: 40,
            opacity: 0.5,
          }}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              textAlign: 'center',
              fontWeight: '500',
              paddingVertical: 12,
            }}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <Text style={{color: 'rgba(237, 237, 237, 1)'}}>
          Crear nueva cuenta
        </Text>
      </View>
    </ScrollView>
  );
};

export default App;
