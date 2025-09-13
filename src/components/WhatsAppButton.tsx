import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = "556798207352";
  const message = encodeURIComponent("ola, tudo bem? peciso de ajuda");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 rounded-full shadow-strong hover:shadow-colored"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};