import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'team' | 'contact';
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
  onAdminToggle: () => void;
  isAdminOpen: boolean;
}

export default function Navbar({ currentPage, onPageChange, onAdminToggle, isAdminOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as const },
    { label: 'Services', page: 'services' as const },
    { label: 'About Us', page: 'team' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  return (
    <>
      {/* Scroll timeline progress bar at the very top of the screen */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-[60] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] transition-all duration-75" 
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      <nav
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/75 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo - Recreates the user-uploaded image */}
            <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
              <Logo />
            </div>

            {/* Desktop Navigation Links - Aligned at the far right */}
            <div className="hidden lg:flex items-center gap-1.5 ml-auto">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onPageChange(item.page)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    currentPage === item.page
                      ? 'text-white bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] shadow-sm'
                      : 'text-slate-600 hover:text-[#0b4bce] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl hover:bg-slate-200/80 transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg text-left">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPageChange(item.page);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-extrabold transition-all uppercase tracking-wide cursor-pointer ${
                    currentPage === item.page
                      ? 'text-white bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
