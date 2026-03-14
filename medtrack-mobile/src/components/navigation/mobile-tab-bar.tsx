import { Pressable, StyleSheet, View } from "react-native";
import { AppIcon } from "../icons/app-icon";
import { colors } from "../../theme/colors";

export type MobileTabBarItem = {
  id: string;
  icon: "alarm" | "home" | "trophy";
  active?: boolean;
};

type MobileTabBarProps = {
  items: MobileTabBarItem[];
  onPressFab?: () => void;
  onPressItem?: (id: string) => void;
};

export function MobileTabBar({ items, onPressFab, onPressItem }: MobileTabBarProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bar}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            onPress={() => onPressItem?.(item.id)}
            style={[styles.item, item.active ? styles.itemActive : undefined]}
          >
            <AppIcon
              name={item.icon}
              size={25}
              variant={item.active ? "inverse" : "default"}
            />
          </Pressable>
        ))}
      </View>

      <Pressable accessibilityRole="button" onPress={onPressFab} style={styles.fab}>
        <AppIcon name="plus" size={23} variant="inverse" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },
  bar: {
    flex: 1,
    height: 71,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 40,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    paddingHorizontal: 18,
    shadowColor: "#D9D9D9",
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
  item: {
    width: 71,
    height: 55,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  itemActive: {
    backgroundColor: colors.brand,
  },
  fab: {
    width: 71,
    height: 71,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.brand,
  },
});
