import es from '../locales/es.json';
import en from '../locales/en.json';

const languages = { es, en };

export type Lang = 'es' | 'en';

export function useTranslations(lang: Lang) {
  return (key: string) => {
    const keys = key.split('.');
    let result: any = languages[lang];
    for (const k of keys) {
      if (result && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };
}

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}
