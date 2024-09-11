import home from "./home/index"

interface TranslationSection {
  [key: string]: {
    es: { [key: string]: any };
    en: { [key: string]: any };
  };
}

const sections: TranslationSection = {
  home,
};

export default sections;