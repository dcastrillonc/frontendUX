import { useEffect, useState } from "react";

import { HomeScreen } from "./src/screens/home-screen";
import { ScanPrescriptionScreen } from "./src/screens/scan-prescription-screen";
import { SplashScreen } from "./src/screens/splash-screen";

type AppScreen = "home" | "scanPrescription";

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return <SplashScreen />;
  }

  if (currentScreen === "scanPrescription") {
    return <ScanPrescriptionScreen onBack={() => setCurrentScreen("home")} />;
  }

  return <HomeScreen onOpenScanPrescription={() => setCurrentScreen("scanPrescription")} />;
}
