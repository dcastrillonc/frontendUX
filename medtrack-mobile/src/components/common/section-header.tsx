import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { colors } from "../../theme/colors";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  titleStyle?: StyleProp<TextStyle>;
};

export function SectionHeader({ title, actionLabel, titleStyle }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {actionLabel ? (
        <Pressable accessibilityRole="button">
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  title: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  action: {
    color: colors.brand,
    width: 61,
    height: 20,
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.6,
    textAlign: "right",
  },
});
