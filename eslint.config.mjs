// eslint-config-next 16 ships native flat config -- the old FlatCompat
// bridge (needed for pre-flat-config "next/core-web-vitals" string extends)
// is no longer required and actually crashes against this version (circular
// structure in the plugin object when FlatCompat tries to JSON-stringify a
// validation error). Import the flat configs directly instead.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
