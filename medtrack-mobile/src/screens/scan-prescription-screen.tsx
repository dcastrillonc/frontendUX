import { useEffect, useState } from "react";
import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

import { AppIcon } from "../components/icons/app-icon";
import { PrescriptionAnalysisScreen } from "./prescription-analysis-screen";
import { colors } from "../theme/colors";

type ScanPrescriptionScreenProps = {
  onBack: () => void;
};

type CaptureState = "idle" | "preview" | "loading";

const androidTopInset = Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 12 : 0;

export function ScanPrescriptionScreen({ onBack }: ScanPrescriptionScreenProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [captureState, setCaptureState] = useState<CaptureState>("idle");
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [loaderStep, setLoaderStep] = useState(0);

  useEffect(() => {
    setHasCameraPermission(permission?.granted ?? false);
  }, [permission]);

  useEffect(() => {
    const requestPermissionOnOpen = async () => {
      if (!permission || permission.granted || permission.canAskAgain === false) {
        return;
      }

      const nextPermission = await requestPermission();
      setHasCameraPermission(nextPermission.granted);
      if (nextPermission.granted) {
        setIsCameraReady(false);
      }
      setCameraError(null);
    };

    void requestPermissionOnOpen();
  }, [permission, requestPermission]);

  useEffect(() => {
    if (!hasCameraPermission) {
      setIsCameraReady(false);
    }
  }, [hasCameraPermission]);

  useEffect(() => {
    if (captureState !== "preview") {
      return;
    }

    const timer = setTimeout(() => {
      setCaptureState("loading");
    }, 900);

    return () => clearTimeout(timer);
  }, [captureState]);

  useEffect(() => {
    if (captureState !== "loading") {
      return;
    }

    const timer = setInterval(() => {
      setLoaderStep((current) => (current + 1) % 3);
    }, 450);

    return () => clearInterval(timer);
  }, [captureState]);

  const showPreview = async () => {
    if (hasCameraPermission) {
      setCaptureState("preview");
      return;
    }

    const nextPermission = await requestPermission();
    setHasCameraPermission(nextPermission.granted);
    setCameraError(null);

    if (nextPermission.granted) {
      setCaptureState("preview");
    }
  };

  if (captureState === "loading") {
    return <PrescriptionAnalysisScreen activeStep={loaderStep} onBack={onBack} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.screen}>
        <Pressable accessibilityRole="button" onPress={onBack} style={styles.backButton}>
          <AppIcon name="chev-circle-left" size={40} />
        </Pressable>

        <Text style={styles.title}>Escanea tu fórmula médica</Text>

        <View style={styles.previewFrame}>
          {captureState === "preview" ? (
            <PrescriptionPreview />
          ) : (
            <View style={styles.cameraPlaceholder}>
              {hasCameraPermission ? (
                <CameraView
                  active={captureState === "idle"}
                  facing="back"
                  key="live-camera"
                  onMountError={(event) => {
                    setCameraError(event.message);
                    setIsCameraReady(false);
                  }}
                  onCameraReady={() => {
                    setCameraError(null);
                    setIsCameraReady(true);
                  }}
                  style={styles.cameraView}
                />
              ) : null}

              {!hasCameraPermission || cameraError ? (
                <View style={styles.cameraOverlay} />
              ) : null}
            </View>
          )}
        </View>

        {captureState === "idle" ? (
          <Pressable
            accessibilityRole="button"
            disabled={!hasCameraPermission}
            onPress={showPreview}
            style={[styles.ctaButton, !hasCameraPermission ? styles.ctaButtonDisabled : undefined]}
          >
            <Text style={[styles.ctaLabel, !hasCameraPermission ? styles.ctaLabelDisabled : undefined]}>
              Tomar foto
            </Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

function PrescriptionPreview() {
  return (
    <View style={styles.prescriptionCard}>
      <View style={styles.prescriptionHeader}>
        <View>
          <Text style={styles.logoText}>VIRREY SOLIS</Text>
          <Text style={styles.logoSubtext}>IPS</Text>
        </View>
        <Text style={styles.headerCenter}>FORMULA MEDICA</Text>
        <Text style={styles.pageNumber}>Pagina 2</Text>
      </View>

      <View style={styles.lineBlock}>
        <View style={styles.longLine} />
        <View style={styles.longLine} />
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>INFORMACION DEL PACIENTE</Text>
          <Text style={styles.infoRow}>Nombre: JESUS ANTONIO ALVAREZ CARDONA</Text>
          <Text style={styles.infoRow}>Documento: CC 1012345678</Text>
          <Text style={styles.infoRow}>Telefono: 3001234567</Text>
          <Text style={styles.infoRow}>Diagnostico: Dolor lumbar</Text>
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Datos</Text>
          <Text style={styles.infoRow}>Fecha: 22 Mar 2025</Text>
          <Text style={styles.infoRow}>Nacimiento: 27 Mar 1988</Text>
          <Text style={styles.infoRow}>Plan: Subsidiado</Text>
          <Text style={styles.infoRow}>Origen: General</Text>
        </View>
      </View>

      <View style={styles.lineBlock}>
        <View style={styles.longLine} />
        <View style={styles.longLine} />
      </View>

      <View style={styles.medicationSection}>
        <Text style={styles.infoLabel}>DETALLE DE SERVICIOS / MEDICAMENTOS</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>CODIGO</Text>
          <Text style={styles.tableHeader}>CANT</Text>
          <Text style={styles.tableHeader}>DETALLE</Text>
        </View>
        <View style={styles.tableDivider} />
        <Text style={styles.infoRow}>567 | 1 | Tylenol 20 capsulas</Text>
        <Text style={styles.infoRow}>Dosis: Aplicar dos gotas por 20 dias</Text>
      </View>

      <View style={styles.scanCornerTopLeft} />
      <View style={styles.scanCornerTopRight} />
      <View style={styles.scanCornerBottomLeft} />
      <View style={styles.scanCornerBottomRight} />
    </View>
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
    paddingHorizontal: 28,
    paddingTop: 10 + androidTopInset,
    paddingBottom: 32,
  },
  backButton: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 112,
    textAlign: "center",
    color: "#111111",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.6,
  },
  previewFrame: {
    marginTop: 54,
    width: 318,
    height: 309,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraPlaceholder: {
    width: 318,
    height: 309,
    borderRadius: 30,
    backgroundColor: "#050505",
    overflow: "hidden",
  },
  cameraView: {
    width: "100%",
    height: "100%",
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(5, 5, 5, 0.35)",
  },
  ctaButton: {
    marginTop: 56,
    width: 317,
    height: 55,
    alignSelf: "center",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(69, 181, 196, 0.6)",
  },
  ctaButtonDisabled: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFFFFF",
  },
  ctaLabel: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  ctaLabelDisabled: {
    color: "#131316",
  },
  prescriptionCard: {
    width: 318,
    height: 309,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 5,
    overflow: "hidden",
  },
  prescriptionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  logoText: {
    color: "#245DA7",
    fontSize: 8,
    fontWeight: "700",
  },
  logoSubtext: {
    color: "#43A7B7",
    fontSize: 7,
    fontWeight: "700",
  },
  headerCenter: {
    marginLeft: 12,
    flex: 1,
    color: "#4F4F4F",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
  },
  pageNumber: {
    color: "#4F4F4F",
    fontSize: 5,
    fontWeight: "500",
  },
  lineBlock: {
    marginTop: 10,
    gap: 6,
  },
  longLine: {
    height: 1,
    backgroundColor: "#8B8B8B",
    opacity: 0.75,
  },
  infoGrid: {
    marginTop: 8,
    flexDirection: "row",
    gap: 14,
  },
  infoColumn: {
    flex: 1,
    gap: 3,
  },
  infoLabel: {
    color: "#585858",
    fontSize: 5,
    fontWeight: "700",
  },
  infoRow: {
    color: "#5D5D5D",
    fontSize: 4.8,
    fontWeight: "500",
  },
  medicationSection: {
    marginTop: 10,
    gap: 4,
  },
  tableRow: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableHeader: {
    color: "#585858",
    fontSize: 5,
    fontWeight: "700",
  },
  tableDivider: {
    height: 1,
    backgroundColor: "#8B8B8B",
    opacity: 0.75,
    marginTop: 2,
    marginBottom: 2,
  },
  scanCornerTopLeft: {
    position: "absolute",
    top: 35,
    left: 45,
    width: 56,
    height: 56,
    borderTopWidth: 6,
    borderLeftWidth: 6,
    borderColor: colors.brand,
    borderTopLeftRadius: 26,
  },
  scanCornerTopRight: {
    position: "absolute",
    top: 35,
    right: 45,
    width: 56,
    height: 56,
    borderTopWidth: 6,
    borderRightWidth: 6,
    borderColor: colors.brand,
    borderTopRightRadius: 26,
  },
  scanCornerBottomLeft: {
    position: "absolute",
    bottom: 35,
    left: 45,
    width: 56,
    height: 56,
    borderBottomWidth: 6,
    borderLeftWidth: 6,
    borderColor: colors.brand,
    borderBottomLeftRadius: 26,
  },
  scanCornerBottomRight: {
    position: "absolute",
    right: 45,
    bottom: 35,
    width: 56,
    height: 56,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderColor: colors.brand,
    borderBottomRightRadius: 26,
  },
});
