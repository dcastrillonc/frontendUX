import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppIcon } from "../icons/app-icon";
import { colors } from "../../theme/colors";

type ReminderActionChipProps = {
  label: string;
  icon: "check" | "timer";
  active?: boolean;
};

export function ReminderActionChip({
  label,
  icon,
  active = false,
}: ReminderActionChipProps) {
  return (
    <Pressable style={[styles.container, active ? styles.containerActive : styles.containerIdle]}>
      <View style={styles.icon}>
        <AppIcon name={icon} size={22} variant={active ? "inverse" : "default"} />
      </View>
      <Text style={[styles.label, active ? styles.labelActive : styles.labelIdle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  containerActive: {
    backgroundColor: "rgba(69, 181, 196, 0.6)",
  },
  containerIdle: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#F1F1F1",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  labelActive: {
    color: "#FFFFFF",
  },
  labelIdle: {
    color: "#000000",
  },
});
