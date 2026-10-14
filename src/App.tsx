import React from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { AttendanceSection } from './components/AttendanceSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SectionTransition3D } from './components/SectionTransition3D';

export default function App() {
  return (
    <MotionConfig reducedMotion="never">
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neutral-800 selection:text-white">
      {/* Header Navigation */}
      <Header />

      <main>
        {/* Hero Section — Primeira Dobra */}
        <SectionTransition3D enter={false}>
          <Hero />
        </SectionTransition3D>

        {/* 01 / O Escritório */}
        <SectionTransition3D>
          <AboutSection />
        </SectionTransition3D>

        {/* 02 / Áreas de Atuação */}
        <SectionTransition3D>
          <PracticeAreas />
        </SectionTransition3D>

        {/* 03 / Modalidades de Atendimento */}
        <SectionTransition3D>
          <AttendanceSection />
        </SectionTransition3D>

        {/* 04 / Localização em Belo Horizonte */}
        <SectionTransition3D>
          <LocationSection />
        </SectionTransition3D>

        {/* 05 / Contato Imediato */}
        <SectionTransition3D exit={false}>
          <ContactSection />
        </SectionTransition3D>
      </main>

      {/* Footer & Compliance */}
      <Footer />

      {/* Discreet floating WhatsApp helper */}
      <FloatingWhatsApp />
    </div>
    </MotionConfig>
  );
}
