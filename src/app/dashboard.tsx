import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const router = useRouter();
  const { usuario } = useLocalSearchParams<{ usuario: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela principal</Text>

      <View style={styles.card}>
        <Text style={styles.bemVindo}>Bem vindo {usuario}</Text>
        <Text style={styles.texto}>Você está na tela principal da aplicação</Text>
      </View>

      <Pressable style={styles.botaoSair} onPress={() => router.replace("/")}>
        <Text style={styles.textoBotao}>Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#f2f4f8", justifyContent: "center" },
  titulo: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 24, color: "#1e3a8a" },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    marginBottom: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  bemVindo: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  texto: { fontSize: 16, color: "#555" },
  botaoSair: { backgroundColor: "#dc2626", padding: 14, borderRadius: 8, alignItems: "center" },
  textoBotao: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});