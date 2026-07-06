import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MobileNav from './MobileNav';
import { NAV_ITEMS, COMPANY_NAME } from '../../constants/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const useLightTransparentTheme = !isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-border'
          : 'bg-transparent',
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label={`${COMPANY_NAME} — Home`}
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">L</span>
            </div>
            <span
              className={cn(
                'font-heading font-bold text-xl tracking-tight transition-colors',
                useLightTransparentTheme ? 'text-white' : 'text-secondary',
              )}
            >
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      useLightTransparentTheme
                        ? isActive
                          ? 'text-white bg-white/10'
                          : 'text-slate-100 hover:text-white hover:bg-white/10'
                        : isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-text-light hover:text-primary hover:bg-primary/5',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" variant="cta" size="sm">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              useLightTransparentTheme
                ? 'text-white hover:bg-white/10'
                : 'text-text-light hover:bg-surface',
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
}
