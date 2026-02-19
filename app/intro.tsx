import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "80%",
  },
});

export default function IntroScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to the main part of the app, e.g., the tabs layout
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
}
