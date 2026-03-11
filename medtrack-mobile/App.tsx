import { useEffect, useState } from "react";

import { HomeScreen } from "./src/screens/home-screen";
import { SplashScreen } from "./src/screens/splash-screen";

export default function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return isBooting ? <SplashScreen /> : <HomeScreen />;
}
