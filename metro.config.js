const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const config = getDefaultConfig(__dirname);
// Add asset extensions (images, fonts, etc.)
config.resolver.assetExts = [
  ...config.resolver.assetExts, // Keep existing extensions
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "svg", // If you're using react-native-svg
];
// Add source extensions (if you need custom file extensions)
config.resolver.sourceExts = [
  ...config.resolver.sourceExts, // Keep existing extensions
  "mjs",
  "cjs",
];
module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, {
    input: "./src/app/global.css",
    projectRoot: __dirname,
    watchFolder: [__dirname],
  })
);
