import { useState, useEffect } from 'react';

const TranslucidNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if navbar is over the dark section
      const darkSection = document.getElementById('dark-section');
      if (darkSection) {
        const navbarHeight = 80; // Approximate navbar height
        const darkSectionTop = darkSection.offsetTop;
        const darkSectionBottom = darkSectionTop + darkSection.offsetHeight;
        
        if (window.scrollY + navbarHeight >= darkSectionTop && 
            window.scrollY <= darkSectionBottom) {
          setOverDarkSection(true);
        } else {
          setOverDarkSection(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-center p-5 z-50 transition-all duration-300">
        <nav className={`
          flex items-center w-full max-w-2xl 
          rounded-full px-6 py-3
          transition-all duration-300
          ${scrolled ? 'bg-opacity-25' : 'bg-opacity-20'} 
          ${overDarkSection 
            ? 'bg-white text-gray-900 border border-gray-300' 
            : 'bg-white text-white border border-white border-opacity-30'}
          backdrop-blur-md
        `}>
          {/* Logo */}
          <div className="mr-6">
            <svg viewBox="0 0 100 100" className={`w-9 h-9 ${overDarkSection ? 'fill-gray-900' : 'fill-white'}`}>
              <path d="M30,20 L30,80 L45,80 L45,50 L55,50 L55,80 L70,80 L70,20 L55,20 L55,35 L45,35 L45,20 L30,20 Z" />
            </svg>
          </div>
          
          {/* Nav Links */}
          <ul className="flex space-x-6 flex-grow">
            <li>
              <a href="#" className={`text-lg font-medium hover:opacity-80 transition-opacity ${overDarkSection ? 'text-gray-900' : 'text-white'}`}>Index</a>
            </li>
            <li>
              <a href="#" className={`text-lg font-medium hover:opacity-80 transition-opacity ${overDarkSection ? 'text-gray-900' : 'text-white'}`}>Articles</a>
            </li>
            <li>
              <a href="#" className={`text-lg font-medium hover:opacity-80 transition-opacity ${overDarkSection ? 'text-gray-900' : 'text-white'}`}>Cmd</a>
            </li>
            <li>
              <a href="#" className={`text-lg font-medium hover:opacity-80 transition-opacity ${overDarkSection ? 'text-gray-900' : 'text-white'}`}>Ask</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Blue section */}
      <section className="h-screen bg-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Translucid Navbar with Tailwind</h1>
          <p className="text-xl mb-6 max-w-2xl">
            This navbar uses Tailwind CSS and adapts as you scroll through different colored sections.
            Scroll down to see how it changes over dark backgrounds.
          </p>
          <div className="inline-block animate-bounce mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Dark section */}
      <section id="dark-section" className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Dark Section</h2>
          <p className="text-xl max-w-2xl">
            Notice how the navbar adapts to maintain contrast and visibility when positioned over this dark background.
            The text and logo change color for better readability.
          </p>
        </div>
      </section>

      {/* Light section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center text-gray-800 px-4">
          <h2 className="text-3xl font-bold mb-4">Light Section</h2>
          <p className="text-xl max-w-2xl">
            And now the navbar returns to its original appearance when over a light section.
            This adaptive behavior ensures the navbar remains accessible in any context.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TranslucidNavbar;