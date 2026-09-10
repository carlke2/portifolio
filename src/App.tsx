import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Stack } from './components/Stack';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default App;
