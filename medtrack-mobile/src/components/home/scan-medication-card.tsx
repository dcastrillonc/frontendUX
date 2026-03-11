import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppIcon } from "../icons/app-icon";
import { colors } from "../../theme/colors";

type ScanMedicationCardProps = {
  title: string;
  description: string;
};

export function ScanMedicationCard({
  title,
  description,
}: ScanMedicationCardProps) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.iconWrap}>
        <AppIcon name="camera" size={36} variant="inverse" />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.brand,
    backgroundColor: colors.brandMuted,
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#7CCFDA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 14,
    width: 250,
    height: 20,
    color: "#131316",
    fontFamily: "Inter",
    fontSize: 19,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: "center",
  },
  description: {
    marginTop: 6,
    width: 350,
    height: 15,
    color: "rgba(19, 19, 22, 0.6)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: -0.5,
  },
});
