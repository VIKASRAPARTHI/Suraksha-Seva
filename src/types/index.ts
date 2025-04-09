export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
}

export interface LegalResource {
  title: string;
  description: string;
  link: string;
}

export interface CrimeType {
  title: string;
  description: string;
  ipcSections: string[];
  preventiveMeasures: string[];
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}