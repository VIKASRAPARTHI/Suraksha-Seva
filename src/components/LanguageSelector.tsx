import React from 'react';
import Select from 'react-select';
import { supportedLanguages } from '../data/languages';
import { Language } from '../types';

interface LanguageSelectorProps {
  onChange: (language: Language) => void;
  currentLanguage: string;
}

export function LanguageSelector({ onChange, currentLanguage }: LanguageSelectorProps) {
  const options = supportedLanguages.map(lang => ({
    value: lang.code,
    label: `${lang.name} (${lang.nativeName})`
  }));

  return (
    <Select
      className="w-48"
      options={options}
      value={options.find(opt => opt.value === currentLanguage)}
      onChange={(option) => {
        const language = supportedLanguages.find(lang => lang.code === option?.value);
        if (language) {
          onChange(language);
        }
      }}
      isSearchable={false}
      placeholder="Select Language"
    />
  );
}