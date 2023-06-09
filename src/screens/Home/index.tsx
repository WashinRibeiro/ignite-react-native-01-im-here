import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar !!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento </Text>
      <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2022 </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b" 
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}> Clique aqui </Text>
      </TouchableOpacity>
    </View>
  );
}