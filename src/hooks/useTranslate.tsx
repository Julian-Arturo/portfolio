import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import sections from "../locales/index";

interface Translation {
  [key: string]: any
}

const useTranslate = (section: string): Translation => {
  const [translation, setTranslation] = useState<Translation>({ "deafult": "" });
  const { locale } = useRouter();

  useEffect(() => {
    const translationSection = sections[`${section}`];
    const localeTranslation = translationSection[`${locale as "es" | "en"}`];
    setTranslation(localeTranslation)
  }, [locale])
  
  return translation
}

export default useTranslate
