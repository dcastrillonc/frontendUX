import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { AppIcon } from "../components/icons/app-icon";

type PrescriptionAnalysisScreenProps = {
  activeStep: number;
  onBack: () => void;
};

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;

export function PrescriptionAnalysisScreen({
  activeStep,
  onBack,
}: PrescriptionAnalysisScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.screen}>
        <Pressable accessibilityRole="button" onPress={onBack} style={styles.backButton}>
          <AppIcon name="chev-circle-left" size={40} />
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.text}>
            Analizando los datos de tu medicamento de la fórmula médica
          </Text>

          <View style={styles.loaderDots}>
            {[0, 1, 2].map((dot) => (
              <View
                key={dot}
                style={[styles.loaderDot, dot === activeStep ? styles.loaderDotActive : undefined]}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 28,
    paddingTop: 10 + androidTopInset,
    paddingBottom: 32,
  },
  backButton: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginTop: 32,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 42,
    paddingBottom: 90,
  },
  text: {
    width: 310,
    color: "#000000",
    fontFamily: "Inter",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: -0.5,
    fontWeight: "400",
  },
  loaderDots: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  loaderDot: {
    width: 14,
    height: 14,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#45B5C4",
    backgroundColor: "#FFFFFF",
  },
  loaderDotActive: {
    backgroundColor: "#45B5C4",
  },
});
