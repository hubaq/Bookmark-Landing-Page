import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Download from './Download';
import FAQ from './FAQ';
import Update from './Update';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState } from 'react';

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='app'>
      <Header setIsOpen={setIsOpen} />
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Update />
      <Footer />
    </div>
  );
};

export default AppLayout;
