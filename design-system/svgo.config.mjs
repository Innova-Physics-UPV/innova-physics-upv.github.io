// SVGO settings for the logos in src/assets/logos/ (they are inlined on
// every page, so their size counts). Coordinates rounded to three decimals:
// identical when drawn at 1200px. Keep ids; keep fill="currentColor".
//   npx svgo@4 --config design-system/svgo.config.mjs -f src/assets/logos -r
export default {
  multipass: true,
  floatPrecision: 3,
  plugins: [{ name: 'preset-default', params: { overrides: { cleanupIds: false } } }],
};
