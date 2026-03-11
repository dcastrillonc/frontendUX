import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../theme/colors";
import { ReminderActionChip } from "./reminder-action-chip";

export type ReminderCardData = {
  scheduleLabel: string;
  title: string;
  description: string;
  descriptionEmphasis?: string;
  details: string;
};

type ReminderCardProps = {
  reminder: ReminderCardData;
};

export function ReminderCard({ reminder }: ReminderCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.schedule}>{reminder.scheduleLabel}</Text>
        <Text style={styles.title}>{reminder.title}</Text>
        <Text style={styles.description}>
          {reminder.description}
          {reminder.descriptionEmphasis ? (
            <Text style={styles.descriptionEmphasis}>{reminder.descriptionEmphasis}</Text>
          ) : null}
        </Text>
        <Text style={styles.details}>{reminder.details}</Text>
      </View>

      <View style={styles.actions}>
        <ReminderActionChip label="Tomada" icon="check" active={true} />
        <ReminderActionChip label="Posponer" icon="timer" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 361,
    minHeight: 202,
    alignSelf: "center",
    borderRadius: 24,
    padding: 18,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
  content: {
    width: 306,
    alignSelf: "center",
  },
  schedule: {
    color: colors.brand,
    width: 250,
    height: 20,
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.5,
    textTransform: "uppercase",
  },
  title: {
    marginTop: 10,
    width: 88,
    height: 20,
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  description: {
    marginTop: 4,
    width: 250,
    height: 20,
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  descriptionEmphasis: {
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.5,
    color: "#000000",
  },
  details: {
    marginTop: 6,
    width: 130,
    height: 20,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  actions: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
