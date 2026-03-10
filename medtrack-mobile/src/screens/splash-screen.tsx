import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { MedtrackLogo } from "../components/brand/medtrack-logo";
import { colors } from "../theme/colors";

export function SplashScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.container}>
        <MedtrackLogo />
        <Text style={styles.title}>MedTrack+</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    marginTop: 20,
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.7,
  },
});
