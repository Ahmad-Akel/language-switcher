import { enTranslation } from "./en";
import { czTranslation } from "./cz";

export interface TranslationStructure {
  appTitle: string;
  signupForm: {
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    submitButton: string;
  };
}

export const emptyTranslation: TranslationStructure = {
  appTitle: "",
  signupForm: {
    formTitle: "",
    nameLabel: "",
    emailLabel: "",
    submitButton: "",
  },
};

export const translations = {
  en: enTranslation,
  cz: czTranslation,
};
