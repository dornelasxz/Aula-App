import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Button from './src/components/Button';
import Input from './src/components/Input';

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('marcos@gmail.com')
  const [editandoEmail, setEditandoEmail] = useState(false)

  function fecharTeclado() {
    Keyboard.dismiss()
  }

  function handleSave() {
    Alert.alert(`Ola ${name}`)
    Haptics.selectionAsync()
  }

  function handleClean() {
    setName('')
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyAvContainer}
      behavior={'padding'}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        <TouchableWithoutFeedback onPress={fecharTeclado}>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            <Text style={styles.title}>Perfil</Text>

            <View style={styles.main}>
              <TouchableOpacity
                style={styles.btnAvatar}
                activeOpacity={0.5} // ajusta transparencia no clique
              >
                <Image
                  source={{ uri: 'https://avatars.githubusercontent.com/u/62637265?v=4' }}
                  style={styles.avatar}
                />

                {/* desafio 5: icone e texto na mesma linha */}
                <View style={styles.linhaFoto}>
                  <Ionicons name="camera" size={18} color="#00B37E" />
                  <Text style={styles.txtAlterarFoto}>Alterar foto</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.inputsContainer}>
                {/* desafios 1 e 2: campo controlado (value) usando o componente Input */}
                <Input
                  placeholder='Nome'
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                {/* desafio 4: contagem de caracteres */}
                <Text style={styles.contador}>{name.length} caracteres</Text>

                {/* desafio 3: e-mail editavel por um estado */}
                <TextInput
                  style={[styles.input, !editandoEmail && styles.inputDisabled]}
                  selectionColor='#00B37E'
                  value={email}
                  onChangeText={setEmail}
                  editable={editandoEmail}
                  keyboardType='email-address'
                  autoCapitalize='none'
                />
                <Button
                  title={editandoEmail ? 'Concluir' : 'Editar'}
                  handlePress={() => setEditandoEmail(!editandoEmail)}
                />
              </View>

              <View style={styles.inputsContainer}>
                <Text style={styles.label}>Alterar senha</Text>

                <Input placeholder='Senha antiga' secureTextEntry />

                <Input placeholder='Nova senha' secureTextEntry />
              </View>

              {/* <TouchableOpacity
                style={styles.btn}
                onPress={handleSave}
              >
                <Text style={styles.label}>Atualizar</Text>
              </TouchableOpacity> */}
              <Button title="Salvar" handlePress={handleSave} />
              <Button title="Limpar" handlePress={handleClean} />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyAvContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginVertical: 24, // cima/baixo
  },
  main: {
    backgroundColor: '#121214',
    flex: 1, // ocupa todo espaço disponivel em tela
    width: '100%',
    paddingVertical: 24, // espaço interno cima/baixo
    paddingHorizontal: 40,
  },
  btnAvatar: {
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: 148,
    borderWidth: 2,
    borderColor: '#323238',
  },
  linhaFoto: {
    flexDirection: 'row', // padrao e coluna, entao precisa declarar row
    alignItems: 'center',
    gap: 6,
  },
  txtAlterarFoto: {
    color: '#00B37E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputsContainer: {
    gap: 16,
    marginTop: 36,
  },
  input: {
    backgroundColor: '#39393C',
    height: 56,
    width: '100%',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16, // espaço interno na lateral esquerda
  },
  inputDisabled: {
    backgroundColor: '#202024',
    color: '#666',
  },
  contador: {
    color: '#7C7C8A',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
