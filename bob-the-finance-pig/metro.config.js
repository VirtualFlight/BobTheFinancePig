const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

config.transformer.envBlacklist = ['API_KEY']; // Prevent bundler from inlining

module.exports = config;

module.exports = withNativeWind(config, { input: './global.css' })