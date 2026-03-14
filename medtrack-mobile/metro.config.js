const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Tratar SVG como componentes (no como assets) para que funcionen en APK release.
// Si "svg" estuviera en assetExts, Image.resolveAssetSource() en release devuelve
// un ID que SvgUri no puede cargar; como componentes van en el bundle y funcionan siempre.
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = config;
