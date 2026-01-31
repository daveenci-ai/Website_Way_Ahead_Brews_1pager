
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ComingSoon from './components/ComingSoon.tsx';
import FeaturedBrews from './components/FeaturedBrews.tsx';
import WingStory from './components/WingStory.tsx';
import Story from './components/Story.tsx';
import Process from './components/Process.tsx';
import Footer from './components/Footer.tsx';

export type Page = 'home';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const scrollToStory = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="bg-slate-900 text-white min-h-screen relative selection:bg-[#ec1c24] selection:text-white">
        <Header currentPage={currentPage} onNavigate={navigateTo} />
        <main className="relative z-[1]">
          <Hero 
            onStoryClick={scrollToStory}
          />
          <FeaturedBrews />
          <ComingSoon />
          <WingStory onMoreClick={scrollToStory} />
          <Story />
          <Process />
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    </CartProvider>
  );
};

export default App;
