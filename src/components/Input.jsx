import { StyleSheet, TextInput } from "react-native";

/**
 *
 * @param {string} placeholder - texto de dica quando o campo esta vazio
 * @param {string} value - conteudo do campo (controlado pelo estado)
 * @param {function} onChangeText - funçao disparada a cada caractere digitado
 * @example
 * <Input placeholder="Nome" value={name} onChangeText={setName} />
 * @returns
 */
export default function Input({ placeholder, value, onChangeText, ...rest }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor='#7C7C8A'
      selectionColor='#00B37E'
      value={value}
      onChangeText={onChangeText}
      {...rest} // repassa secureTextEntry, editable etc.
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#39393C',
    height: 56,
    width: '100%',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
  },
})
