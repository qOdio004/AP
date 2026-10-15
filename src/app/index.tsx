import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function acessar() {
    if (!login.trim()) {
      setErro("Login obrigatório.");
      return;
    }
    if (!senha) {
      setErro("Senha obrigatória.");
      return;
    }
    
    if (login !== "aluno" || senha !== "123456") {
      setErro("Login ou senha incorretos.");
      return;
    }
    setErro("");
    router.push({ pathname: "/dashboard", params: { usuario: login } });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu App</Text>

      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={login}
        onChangeText={setLogin}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {erro !== "" && <Text style={styles.erro}>{erro}</Text>}

      <Pressable style={styles.botao} onPress={acessar}>
        <Text style={styles.textoBotao}>Acessar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#f2f4f8" },
  titulo: { fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 32, color: "#1e3a8a" },
  label: { fontSize: 16, marginBottom: 6, color: "#333" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  erro: { color: "#dc2626", marginBottom: 12 },
  botao: { backgroundColor: "#2563eb", padding: 14, borderRadius: 8, alignItems: "center" },
  textoBotao: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});