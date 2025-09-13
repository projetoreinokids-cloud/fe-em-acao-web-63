import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="floating"
      size="icon"
      onClick={scrollToTop}
      className="bg-primary hover:bg-primary/90 fixed bottom-6 right-6 z-50 rounded-full shadow-strong hover:shadow-colored"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </Button>
  );
};