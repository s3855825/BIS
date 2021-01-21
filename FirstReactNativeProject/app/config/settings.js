import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://groupmakercollab.herokuapp.com/",
  },
  staging: {
    apiUrl: "https://groupmakercollab.herokuapp.com/",
  },
  prod: {
    apiUrl: "https://groupmakercollab.herokuapp.com/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
