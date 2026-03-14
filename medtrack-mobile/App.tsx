import { useEffect, useState } from "react";

import type { AlarmCardData } from "./src/components/alarms/alarm-card";
import { AlarmUpdateSuccessScreen } from "./src/screens/alarm-update-success-screen";
import { AlarmScreen } from "./src/screens/alarm-screen";
import { ConfirmMedicationScreen } from "./src/screens/confirm-medication-screen";
import { EditAlarmScreen } from "./src/screens/edit-alarm-screen";
import { MedicationRegisteredScreen } from "./src/screens/medication-registered-screen";
import { HomeScreen } from "./src/screens/home-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { ScanPrescriptionScreen } from "./src/screens/scan-prescription-screen";
import { SplashScreen } from "./src/screens/splash-screen";

type AppScreen = "login" | "home" | "scanPrescription" | "confirmMedication" | "medicationRegistered" | "alarms" | "editAlarm" | "alarmSuccess";

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("login");
  const [editingAlarm, setEditingAlarm] = useState<AlarmCardData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return <SplashScreen />;
  }

  if (currentScreen === "login") {
    return <LoginScreen onLogin={() => setCurrentScreen("home")} />;
  }

  if (currentScreen === "scanPrescription") {
    return (
      <ScanPrescriptionScreen
        onBack={() => setCurrentScreen("home")}
        onAnalysisComplete={() => setCurrentScreen("confirmMedication")}
      />
    );
  }

  if (currentScreen === "confirmMedication") {
    return (
      <ConfirmMedicationScreen
        onBack={() => setCurrentScreen("scanPrescription")}
        onConfirm={() => setCurrentScreen("medicationRegistered")}
      />
    );
  }

  if (currentScreen === "medicationRegistered") {
    return <MedicationRegisteredScreen onDone={() => setCurrentScreen("alarms")} />;
  }

  if (currentScreen === "alarms") {
    return (
      <AlarmScreen
        onNavigateToHome={() => setCurrentScreen("home")}
        onOpenScanPrescription={() => setCurrentScreen("scanPrescription")}
        onEditAlarm={(alarm) => { setEditingAlarm(alarm); setCurrentScreen("editAlarm"); }}
      />
    );
  }

  if (currentScreen === "editAlarm" && editingAlarm) {
    return (
      <EditAlarmScreen
        alarm={editingAlarm}
        onBack={() => setCurrentScreen("alarms")}
        onSuccess={() => setCurrentScreen("alarmSuccess")}
      />
    );
  }

  if (currentScreen === "alarmSuccess") {
    return <AlarmUpdateSuccessScreen onDone={() => setCurrentScreen("alarms")} />;
  }

  return (
    <HomeScreen
      onOpenScanPrescription={() => setCurrentScreen("scanPrescription")}
      onNavigateToAlarms={() => setCurrentScreen("alarms")}
    />
  );
}
