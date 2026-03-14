import { useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { AlarmCardData } from "../components/alarms/alarm-card";
import { AppIcon } from "../components/icons/app-icon";
import { colors } from "../theme/colors";

import CalendarEditAlarm from "../assets/calendar-edit-alarm.svg";
import ClockEditAlarm from "../assets/clock-edit-alarm.svg";
import DosisEditAlarm from "../assets/dosis-edit-alarm.svg";
import FileEditAlarm from "../assets/file-edit-alarm.svg";
import NameEditAlarm from "../assets/name-edit-alarm.svg";

const fieldIcons = {
  name: NameEditAlarm,
  dosis: DosisEditAlarm,
  clock: ClockEditAlarm,
  calendar: CalendarEditAlarm,
  file: FileEditAlarm,
};

const ITEM_H =30;
const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;

type DrumPickerProps = {
  items: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

function DrumPicker({ items, selectedIndex, onSelect }: DrumPickerProps) {
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_H);
    if (index >= 0 && index < items.length) onSelect(index);
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.drumScroll}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_H}
      decelerationRate="fast"
      onMomentumScrollEnd={handleScroll}
      contentOffset={{ x: 0, y: selectedIndex * ITEM_H }}
    >
      <View style={{ height: ITEM_H }} />
      {items.map((item, index) => (
        <View key={item} style={styles.drumItem}>
          <Text style={[styles.drumText, index === selectedIndex && styles.drumTextSelected]}>
            {item}
          </Text>
        </View>
      ))}
      <View style={{ height: ITEM_H }} />
    </ScrollView>
  );
}

type EditAlarmScreenProps = {
  alarm: AlarmCardData;
  onBack: () => void;
  onSuccess: () => void;
};

export function EditAlarmScreen({ alarm, onBack, onSuccess }: EditAlarmScreenProps) {
  const [name, setName] = useState(alarm.name);
  const [dose, setDose] = useState(alarm.dose);
  const [frequency, setFrequency] = useState(alarm.frequency);
  const [duration, setDuration] = useState("365 días");
  const [notes, setNotes] = useState("Enfermedad general");

  const timeParts = alarm.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  const initHour = timeParts ? parseInt(timeParts[1]) - 1 : 0;
  const initMinute = timeParts ? parseInt(timeParts[2]) : 0;
  const initAmpm = timeParts ? timeParts[3].toUpperCase() : "AM";

  const [hourIndex, setHourIndex] = useState(Math.max(0, initHour));
  const [minuteIndex, setMinuteIndex] = useState(Math.max(0, initMinute));
  const [ampm, setAmpm] = useState<"AM" | "PM">(initAmpm as "AM" | "PM");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <AppIcon name="chev-circle-left" size={36} />
          </Pressable>
          <Text style={styles.headerTitle}>Editar alarma</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Detalles del medicamento</Text>

          {[
            { label: "Nombre", value: name, onChange: setName, Icon: fieldIcons.name },
            { label: "Dosis", value: dose, onChange: setDose, Icon: fieldIcons.dosis },
            { label: "Frecuencia", value: frequency, onChange: setFrequency, Icon: fieldIcons.clock },
            { label: "Duración del tratamiento", value: duration, onChange: setDuration, Icon: fieldIcons.calendar },
            { label: "Notas", value: notes, onChange: setNotes, Icon: fieldIcons.file },
          ].map((field) => (
            <View key={field.label} style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>{field.label}</Text>
              <View style={styles.fieldRow}>
                <View style={styles.fieldIcon}>
                  <field.Icon width={20} height={20} />
                </View>
                <TextInput
                  style={styles.fieldInput}
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={colors.textMuted}
                />
              </View>
            </View>
          ))}

          <Text style={styles.timeLabel}>Hora de la alarma</Text>
          <View style={styles.timePicker}>
            <View style={styles.drumWrapper}>
              <DrumPicker items={HOURS} selectedIndex={hourIndex} onSelect={setHourIndex} />
            </View>
            <Text style={styles.timeSeparator}>:</Text>
            <View style={styles.drumWrapper}>
              <DrumPicker items={MINUTES} selectedIndex={minuteIndex} onSelect={setMinuteIndex} />
            </View>
            <View style={styles.ampmWrapper}>
              {(["AM", "PM"] as const).map((val) => (
                <Pressable
                  key={val}
                  style={[styles.ampmBtn, ampm === val && styles.ampmBtnActive]}
                  onPress={() => setAmpm(val)}
                >
                  <Text style={[styles.ampmText, ampm === val && styles.ampmTextActive]}>{val}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ height: 20 }} />
          <Pressable style={styles.button} onPress={onSuccess}>
            <Text style={styles.buttonText}>Actualizar alarma</Text>
          </Pressable>
          <View style={{ height: 24 }} />
        </ScrollView>
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
    paddingTop: 16 + androidTopInset,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 8,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.brand,
    letterSpacing: -0.5,
    marginBottom: 20,
    marginTop: 8,
    textAlign: "center",
  },
  fieldGroup: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    height: 52,
    gap: 10,
  },
  fieldIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  fieldInput: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  timeLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  timePicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.brandMuted,
    borderRadius: 20,
    padding: 12,
    gap: 8,
    alignSelf: "center",
    width: 260,
  },
  drumWrapper: {
    height: ITEM_H * 3,
    width: 60,
    overflow: "hidden",
  },
  drumScroll: {
    flex: 1,
  },
  drumItem: {
    height: ITEM_H,
    alignItems: "center",
    justifyContent: "center",
  },
  drumText: {
    fontSize: 20,
    color: colors.textMuted,
  },
  drumTextSelected: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.brand,
  },
  timeSeparator: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.brand,
  },
  ampmWrapper: {
    gap: 8,
    marginLeft: 8,
  },
  ampmBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ampmBtnActive: {
    backgroundColor: colors.brand,
  },
  ampmText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textMuted,
  },
  ampmTextActive: {
    color: "#FFFFFF",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 4,
  },
  button: {
    height: 52,
    width: 180,
    borderRadius: 30,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
