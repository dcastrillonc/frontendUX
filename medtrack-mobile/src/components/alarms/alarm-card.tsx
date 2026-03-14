import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { AppIcon } from "../icons/app-icon";
import { colors } from "../../theme/colors";

export type AlarmCardData = {
  id: string;
  name: string;
  dose: string;
  time: string;
  frequency: string;
  active: boolean;
};

type AlarmCardProps = {
  alarm: AlarmCardData;
  onEditPress?: () => void;
};

export function AlarmCard({ alarm, onEditPress }: AlarmCardProps) {
  const [active, setActive] = useState(alarm.active);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={[styles.iconCircle, active ? styles.iconCircleActive : styles.iconCircleInactive]}>
          <AppIcon name="alarm" size={24} variant={active ? "inverse" : "default"} />
        </View>

        <View style={styles.info}>
          <Text style={[styles.name, !active && styles.textInactive]}>{alarm.name}</Text>
          <Text style={[styles.dose, !active && styles.textInactive]}>{alarm.dose}</Text>
          <View style={styles.meta}>
            <AppIcon name="timer" size={14} />
            <Text style={[styles.metaText, !active && styles.textInactive]}>{alarm.time}</Text>
            <Text style={styles.metaDivider}>  </Text>
            <AppIcon name="alarm" size={14} />
            <Text style={[styles.metaText, !active && styles.textInactive]}>{alarm.frequency}</Text>
          </View>
        </View>

        <Switch
          value={active}
          onValueChange={setActive}
          trackColor={{ false: "#D9D9D9", true: colors.brand }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={styles.actions}>
        <Pressable onPress={onEditPress}>
          <Text style={[styles.actionText, !active && styles.actionTextInactive]}>Editar alarma</Text>
        </Pressable>
        <Pressable>
          <Text style={[styles.actionText, !active && styles.actionTextInactive]}>Ver detalle</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleActive: {
    backgroundColor: colors.brandSoft,
  },
  iconCircleInactive: {
    backgroundColor: "#E5E5E5",
  },
  info: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  dose: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  metaText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  metaDivider: {
    width: 8,
  },
  textInactive: {
    color: colors.textMuted,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.brand,
  },
  actionTextInactive: {
    color: colors.textMuted,
  },
});
