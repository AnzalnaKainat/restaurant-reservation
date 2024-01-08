import React from 'react';
import Navigation from './components/Navigation';
import MockupShowcase from './components/MockupShowcase';
import ProductOverview from './components/ProductOverview';
import Persona from './components/Persona';
import UserJourneyMap from './components/UserJourneyMap';
import Sitemap from './components/Sitemap';
import PaperWireframes from './components/PaperWireframes';
import DigitalWireframes from './components/DigitalWireframes';
import LowFidelityPrototype from './components/LowFidelityPrototype';
import UsabilityParameters from './components/UsabilityParameters';
import Iteration from './components/Iteration';
import HighFidelityPrototype from './components/HighFidelityPrototype';
import AccessibilityConsiderations from './components/AccessibilityConsiderations';
import Takeaways from './components/Takeaways';
import NextStep from './components/NextStep';
import Thanks from './components/Thanks';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <MockupShowcase />
      <ProductOverview />
      <Persona />
      <UserJourneyMap />
      <Sitemap />
      <PaperWireframes />
      <DigitalWireframes />
      <LowFidelityPrototype />
      <UsabilityParameters />
      <Iteration />
      <HighFidelityPrototype />
      <AccessibilityConsiderations />
      <Takeaways />
      <NextStep />
      <Thanks />
    </div>
  );
}

export default App;

