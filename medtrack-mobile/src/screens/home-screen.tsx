import { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { SectionHeader } from "../components/common/section-header";
import { UserAvatar } from "../components/common/user-avatar";
import { ReminderCard, type ReminderCardData } from "../components/home/reminder-card";
import { ScanMedicationCard } from "../components/home/scan-medication-card";
import { MobileTabBar, type MobileTabBarItem } from "../components/navigation/mobile-tab-bar";
import { AppIcon } from "../components/icons/app-icon";
import { colors } from "../theme/colors";

const reminders: ReminderCardData[] = [
  {
    scheduleLabel: "Próxima dosis - 08:00 AM",
    title: "No olvides",
    description: "Toma tu pastilla de ",
    descriptionEmphasis: "acetaminofén",
    details: "500 mg - 1 pastilla",
  },
  {
    scheduleLabel: "Próxima dosis - 01:00 PM",
    title: "Recuerda",
    description: "Aplicar tu medicamento ",
    descriptionEmphasis: "insulina",
    details: "10 UI - 1 dosis",
  },
  {
    scheduleLabel: "Próxima dosis - 09:00 PM",
    title: "Pendiente",
    description: "Tomar la cápsula de ",
    descriptionEmphasis: "omeprazol",
    details: "20 mg - 1 cápsula",
  },
];

const tabItems: MobileTabBarItem[] = [
  { id: "home", icon: "home", active: true },
  { id: "alarms", icon: "alarm" },
  { id: "progress", icon: "trophy" },
];

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;
const androidTabBarLift = Platform.OS === "android" ? 30 : 0;

type HomeScreenProps = {
  onOpenScanPrescription: () => void;
  onNavigateToAlarms: () => void;
};

export function HomeScreen({ onOpenScanPrescription, onNavigateToAlarms }: HomeScreenProps) {
  const { width } = useWindowDimensions();
  const [activeReminderIndex, setActiveReminderIndex] = useState(0);

  const carouselWidth = Math.max(width - 72, 1);

  const handleReminderScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / carouselWidth);
    setActiveReminderIndex(nextIndex);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.brand}>MedTrack+</Text>

          <View style={styles.headerActions}>
            <View style={styles.notificationButton}>
              <AppIcon name="bell" size={27} variant="inverse" />
            </View>

            <UserAvatar initials="DC" />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader
            title="Recordatorios"
            actionLabel="ver todo"
            titleStyle={styles.remindersTitle}
          />
          <View style={styles.sectionBody}>
            <FlatList
              data={reminders}
              horizontal
              keyExtractor={(item) => item.scheduleLabel}
              onMomentumScrollEnd={handleReminderScroll}
              pagingEnabled
              renderItem={({ item }) => (
                <View style={[styles.carouselPage, { width: carouselWidth }]}>
                  <ReminderCard reminder={item} />
                </View>
              )}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
            />
          </View>
          <View style={styles.pagination}>
            {reminders.map((reminder, index) => (
              <View
                key={reminder.scheduleLabel}
                style={[styles.dot, index === activeReminderIndex ? styles.dotActive : undefined]}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Registrar medicamentos" titleStyle={styles.registerTitle} />
          <View style={styles.sectionBody}>
            <ScanMedicationCard
              title="Escanea tu fórmula médica"
              description="Registra tu medicamento con tu fórmula médica"
              onPress={onOpenScanPrescription}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <MobileTabBar
            items={tabItems}
            onPressFab={onOpenScanPrescription}
            onPressItem={(id) => { if (id === "alarms") onNavigateToAlarms(); }}
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
  },
  brand: {
    width: 159,
    height: 29,
    color: colors.textPrimary,
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: -0.45,
    textAlignVertical: "center",
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
  section: {
    marginTop: 28,
  },
  sectionBody: {
    marginTop: 22,
  },
  remindersTitle: {
    width: 132,
    height: 20,
  },
  registerTitle: {
    width: 220,
    height: 20,
  },
  pagination: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  carouselPage: {
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    backgroundColor: "transparent",
  },
  dotActive: {
    backgroundColor: "#D9D9D9",
  },
  footer: {
    marginTop: "auto",
    paddingTop: 28,
    marginBottom: androidTabBarLift,
  },
});
