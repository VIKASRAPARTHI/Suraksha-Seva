import React from 'react';
import { Hero } from '../components/Hero';
import { QuickActions } from '../components/quicklinks/QuickActions';
import { CrimeStats } from '../components/stats/CrimeStats';
import { CrimeMap } from '../components/map/CrimeMap';
import { CrimeTypes } from '../components/crimes/CrimeTypes';
import { SecurityTools } from '../components/tools/SecurityTools';
import { CyberSecurityHub } from '../components/cybersecurity/CyberSecurityHub';
import { LegalSupportCenter } from '../components/legal/LegalSupportCenter';
import { CrimeSimulator } from '../components/interactive/CrimeSimulator';
import { EmergencySection } from '../components/EmergencySection';
import { CyberCrimeSection } from '../components/CyberCrimeSection';
import { GeneralCrimeSection } from '../components/GeneralCrimeSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <div>
      <Hero />
      <QuickActions />
      <CrimeStats />
      <CrimeTypes />
      <CrimeMap />
      <SecurityTools />
      <CyberSecurityHub />
      <LegalSupportCenter />
      <CrimeSimulator />
      <EmergencySection />
      <GeneralCrimeSection />
      <CyberCrimeSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
}