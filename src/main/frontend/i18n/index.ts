import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { en } from "./lang/en";
import { fr } from "./lang/fr";
import { pt } from "./lang/pt";

const resources = {
  en: { translation: en() },
  fr: { translation: fr() },
  pt: { translation: pt() }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;