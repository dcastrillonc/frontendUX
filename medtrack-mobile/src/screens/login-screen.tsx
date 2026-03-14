import { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { colors } from "../theme/colors";

const backgroundUri = Image.resolveAssetSource(require("../assets/home-background.svg")).uri;

type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("demo@medtrack.com");
  const [password, setPassword] = useState("medtrack123");
  const [showPassword, setShowPassword] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <SvgUri
        uri={backgroundUri}
        width={width}
        height={width * (512 / 440)}
        style={styles.background}
      />
      <View style={styles.screen}>
        <View style={styles.brand}>
          <Text style={styles.brandName}>MedTrack+</Text>
          <Text style={styles.subtitle}>La salud bajo control en un solo lugar</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.inputNormal}
              placeholder="tucorreo@ejemplo.com"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="••••••••"
                placeholderTextColor={colors.textMuted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image
                  source={
                    showPassword
                      ? require("../assets/eye.png")
                      : require("../assets/eye-off.png")
                  }
                  style={styles.eyeImage}
                />
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: Platform.OS === "android" ? 400 : 360,
    paddingBottom: 36,
    justifyContent: "flex-start",
  },
  brand: {
    alignItems: "center",
    marginBottom: 48,
  },
  brandName: {
    marginTop: 16,
    color: colors.textPrimary,
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: -0.7,
  },
  subtitle: {
    marginTop: -5,
    color: colors.textSecondary,
    fontSize: 17,
  },
  form: {
    gap: 20,
  },
  field: {
    gap: 8,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    height: 52,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 15,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
  },
  inputNormal: {
    height: 52,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 15,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
  },
  inputPassword: {
    height: 52,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingRight: 48,
    fontSize: 15,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    height: 52,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  eyeImage: {
    width: 22,
    height: 22,
    tintColor: colors.textMuted,
  },
  button: {
    marginTop: 8,
    height: 52,
    width: 240,
    borderRadius: 20,
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
