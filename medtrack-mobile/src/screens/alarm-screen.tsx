import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AlarmCard, type AlarmCardData } from "../components/alarms/alarm-card";
import { SectionHeader } from "../components/common/section-header";
import { UserAvatar } from "../components/common/user-avatar";
import { AppIcon } from "../components/icons/app-icon";
import { MobileTabBar, type MobileTabBarItem } from "../components/navigation/mobile-tab-bar";
import { colors } from "../theme/colors";

const alarmsToday: AlarmCardData[] = [
  { id: "1", name: "Acetaminofén", dose: "500 mg - 1 pastilla", time: "08:00 AM", frequency: "Cada 8 horas", active: true },
  { id: "2", name: "Ibuprofeno", dose: "400 ml - 1 pastilla", time: "09:20 AM", frequency: "Cada 8 horas", active: false },
];

const alarmsTomorrow: AlarmCardData[] = [
  { id: "3", name: "Nafazolina clor...", dose: "20 ml - 2 gotas cada ojo", time: "10:30 PM", frequency: "Cada 24 horas", active: true },
];

const tabItems: MobileTabBarItem[] = [
  { id: "home", icon: "home" },
  { id: "alarms", icon: "alarm", active: true },
  { id: "progress", icon: "trophy" },
];

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;
const androidTabBarLift = Platform.OS === "android" ? 30 : 0;

const pendingCount = alarmsToday.filter((a) => a.active).length;

type AlarmScreenProps = {
  onNavigateToHome: () => void;
  onOpenScanPrescription: () => void;
  onEditAlarm: (alarm: AlarmCardData) => void;
};

export function AlarmScreen({ onNavigateToHome, onOpenScanPrescription, onEditAlarm }: AlarmScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.brand}>MIS ALARMAS</Text>
          <View style={styles.headerActions}>
            <View style={styles.notificationButton}>
              <AppIcon name="bell" size={27} variant="inverse" />
            </View>
            <UserAvatar initials="DC" />
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <View style={styles.sectionHeaderRow}>
              <SectionHeader title="Próximas tomas hoy" />
              {pendingCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{pendingCount} pendiente</Text>
                </View>
              )}
            </View>
            <View style={styles.cardList}>
              {alarmsToday.map((alarm) => (
                <AlarmCard key={alarm.id} alarm={alarm} onEditPress={() => onEditAlarm(alarm)} />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Mañana" />
            <View style={styles.cardList}>
              {alarmsTomorrow.map((alarm) => (
                <AlarmCard key={alarm.id} alarm={alarm} onEditPress={() => onEditAlarm(alarm)} />
              ))}
            </View>
          </View>

          <View style={styles.scrollPadding} />
        </ScrollView>

        <View style={styles.footer}>
          <MobileTabBar
            items={tabItems}
            onPressFab={onOpenScanPrescription}
            onPressItem={(id) => { if (id === "home") onNavigateToHome(); }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 36,
    paddingTop: 22 + androidTopInset,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  brand: {
    color: colors.textPrimary,
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: -0.45,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  notificationButton: {
    width: 54,
    height: 54,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(69, 181, 196, 0.4)",
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: colors.brandSoft,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.brand,
  },
  cardList: {
    marginTop: 14,
    gap: 12,
  },
  scrollPadding: {
    height: 12,
  },
  footer: {
    paddingTop: 12,
    marginBottom: androidTabBarLift,
  },
});
