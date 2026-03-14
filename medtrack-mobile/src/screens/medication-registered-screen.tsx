import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

import ClockRefreshMed from "../assets/clock-refresh-med.svg";
import ContainerPositive from "../assets/Container-positive.svg";
import GearsMed from "../assets/gears-med.svg";

const checkItems = [
  "Dosis diaria configurada",
  "Frecuencia configurada",
  "Duración configurada",
];

type MedicationRegisteredScreenProps = {
  onDone: () => void;
};

export function MedicationRegisteredScreen({ onDone }: MedicationRegisteredScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      onDone();
    }
  }, [progress, onDone]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ContainerPositive width={100} height={100} />

        <Text style={styles.title}>{"Medicamento\nregistrado correctamente"}</Text>

        <Text style={styles.subtitle}>
          {"Estamos configurando tu alarma\nesto tomará unos minutos"}
        </Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <GearsMed width={28} height={28} />
              <Text style={styles.configuringText}>Configurando...</Text>
            </View>
            <Text style={styles.percentText}>{progress}%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>

          <View style={styles.checkList}>
            {checkItems.map((item) => (
              <View key={item} style={styles.checkRow}>
                <Text style={styles.checkMark}>{"✓"}</Text>
                <Text style={styles.checkLabel}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.syncRow}>
            <ClockRefreshMed width={22} height={22} />
            <Text style={styles.syncText}>Sincronizando alarma con el calendario</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    textAlign: "center",
    marginTop: 24,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 32,
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  configuringText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.brand,
  },
  percentText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.brand,
  },
  progressTrack: {
    height: 6,
    borderRadius: 999,
    backgroundColor: "#D1D5DB",
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: 999,
    backgroundColor: colors.brand,
  },
  checkList: {
    marginTop: 16,
    gap: 10,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkMark: {
    fontSize: 13,
    color: colors.textMuted,
  },
  checkLabel: {
    fontSize: 13,
    color: colors.textMuted,
  },
  syncRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
  },
  syncText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    flex: 1,
  },
});
