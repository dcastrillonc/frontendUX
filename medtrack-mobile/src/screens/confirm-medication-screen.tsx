import { useState } from "react";
import {
  Image,
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
import { SvgUri } from "react-native-svg";
import { AppIcon } from "../components/icons/app-icon";
import { colors } from "../theme/colors";

const fieldIcons = {
  name: Image.resolveAssetSource(require("../assets/name-edit-alarm.svg")).uri,
  dosis: Image.resolveAssetSource(require("../assets/dosis-edit-alarm.svg")).uri,
  clock: Image.resolveAssetSource(require("../assets/clock-edit-alarm.svg")).uri,
  calendar: Image.resolveAssetSource(require("../assets/calendar-edit-alarm.svg")).uri,
  file: Image.resolveAssetSource(require("../assets/file-edit-alarm.svg")).uri,
  notes: Image.resolveAssetSource(require("../assets/notes-confirm.svg")).uri,
};

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;

type ConfirmMedicationScreenProps = {
  onBack: () => void;
  onConfirm: () => void;
};

export function ConfirmMedicationScreen({ onBack, onConfirm }: ConfirmMedicationScreenProps) {
  const [name, setName] = useState("Eye-sul (nafazolina clorhidrato) 20ml");
  const [dose, setDose] = useState("Dos gotas por ojo");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("365 días");
  const [notes, setNotes] = useState("");

  const fields = [
    { label: "Nombre", value: name, onChange: setName, iconUri: fieldIcons.name, editIconUri: undefined },
    { label: "Dosis", value: dose, onChange: setDose, iconUri: fieldIcons.dosis, editIconUri: undefined },
    { label: "Frecuencia", value: frequency, onChange: setFrequency, iconUri: fieldIcons.clock, editIconUri: fieldIcons.notes },
    { label: "Duración", value: duration, onChange: setDuration, iconUri: fieldIcons.calendar, editIconUri: undefined },
    { label: "Notas", value: notes, onChange: setNotes, iconUri: fieldIcons.file, editIconUri: fieldIcons.notes },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <AppIcon name="chev-circle-left" size={36} />
          </Pressable>
          <Text style={styles.headerTitle}>Confirmar medicamento</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Detalles del medicamento</Text>
          <Text style={styles.sectionSubtitle}>
            Por favor, verifica la información antes de guardar
          </Text>

          {fields.map((field) => (
            <View key={field.label} style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>{field.label}</Text>
              <View style={styles.fieldRow}>
                <View style={styles.fieldIcon}>
                  <SvgUri uri={field.iconUri} width={20} height={20} />
                </View>
                <TextInput
                  style={styles.fieldInput}
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={colors.textMuted}
                />
                {field.editIconUri && (
                  <SvgUri uri={field.editIconUri} width={20} height={20} />
                )}
              </View>
            </View>
          ))}

          <View style={styles.notificationBanner}>
            <View style={styles.bannerIconCircle}>
              <AppIcon name="alarm" size={24} variant="inverse" />
            </View>
            <Text style={styles.bannerText}>
              Recibirás una notificación de alarma cuando sea el momento de la siguiente toma
            </Text>
          </View>

          <View style={{ height: 20 }} />

          <Pressable style={styles.button} onPress={onConfirm}>
            <Text style={styles.buttonText}>Confirmar medicamento</Text>
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
    textAlign: "center",
    marginTop: 8,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
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
  pencilIcon: {
    fontSize: 16,
    color: colors.brand,
  },
  notificationBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.brandSoft,
    borderRadius: 16,
    padding: 14,
    marginTop: 20,
  },
  bannerIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  bannerText: {
    flex: 1,
    fontSize: 13,
    color: colors.textPrimary,
    lineHeight: 18,
  },
  button: {
    height: 52,
    width: 220,
    borderRadius: 30,
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: colors.brand,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.brand,
    fontSize: 16,
    fontWeight: "700",
  },
});
