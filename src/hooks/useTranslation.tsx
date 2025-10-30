import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import Storage from "@react-native-async-storage/async-storage";
import React, { useCallback, useContext, useEffect, useState } from "react";

import translations from "../constants/translations/";
import { ITranslate } from "../constants/types";

// Create a new i18n instance
const i18n = new I18n(translations);
i18n.defaultLocale = "en";
i18n.enableFallback = true;

export const TranslationContext = React.createContext({});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState("en"); // ✅ Default fallback

  // Apply locale safely
  i18n.locale = locale || "en";

  const t = useCallback(
    (scope: string | string[], options?: object) => {
      return i18n.translate(scope, { ...options, locale: locale || "en" });
    },
    [locale]
  );

  // ✅ Load locale from storage or use device locale with fallback
  const getLocale = useCallback(async () => {
    try {
      const localeJSON = await Storage.getItem("locale");

      let newLocale =
        localeJSON ||
        Localization.locale ||
        i18n.defaultLocale ||
        "en"; // ✅ Fallback priority chain

      // In case device locale is undefined or empty string
      if (!newLocale || typeof newLocale !== "string") {
        newLocale = "en";
      }

      setLocale(newLocale);
    } catch (error) {
      console.warn("Failed to load locale, using fallback:", error);
      setLocale("en"); // ✅ Graceful fallback
    }
  }, []);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  // ✅ Save preference to storage safely
  useEffect(() => {
    if (locale) Storage.setItem("locale", locale);
  }, [locale]);

  const contextValue = {
    t,
    locale,
    setLocale,
    translate: t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

/*
 * useTranslation hook based on i18n-js
 */
export const useTranslation = () =>
  useContext(TranslationContext) as ITranslate;
