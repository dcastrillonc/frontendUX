import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

import ContainerPositive from "../assets/Container-positive.svg";

type AlarmUpdateSuccessScreenProps = {
  onDone: () => void;
};

export function AlarmUpdateSuccessScreen({ onDone }: AlarmUpdateSuccessScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <ContainerPositive width={72} height={72} />
        <Text style={styles.message}>
          {"Alarma del medicamento\nactualizda correctamente"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    letterSpacing: -0.4,
    lineHeight: 28,
  },
});
