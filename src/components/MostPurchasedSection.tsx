import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import cardMusicasImage from '@/assets/card-musicas-gospel.jpg';
import cardCifrasImage from '@/assets/card-cifras-gospel.jpg';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  purchases: number;
  link: string;
}

export const MostPurchasedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: '1',
      title: '+ de 1000 Músicas Gospel',
      description: 'Coletânea completa com mais de mil louvores para toda família',
      image: cardMusicasImage,
      rating: 4.9,
      purchases: 3542,
      link: 'https://wa.me/556798207352?text=oii,%20quero%20adquiri%20as%20%2B1000%20musicas%20gospel'
    },
    {
      id: '2',
      title: 'Cifras Gospel Completa',
      description: 'Todas as cifras dos principais louvores gospel para você tocar',
      image: cardCifrasImage,
      rating: 4.8,
      purchases: 2871,
      link: 'https://wa.me/556798207352?text=ola,%20tudo%20bem?%20quero%20adquirri%20as%20cifra%20gospel%20completa'
    }
  ];

  const handlePurchase = (link: string) => {
    window.open(link, '_blank');
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
      const gap = 32; // 8 * 4 (gap-8 in tailwind)
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-primary animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-hero bg-clip-text text-transparent">
                Conteúdo Bônus<br />Especial
              </h2>
              <Star className="w-8 h-8 text-reino-yellow animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Material exclusivo e especial para<br />tornar a experiência ainda mais rica e divertida!
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-background/90 backdrop-blur-sm border-2 border-border rounded-full p-2 md:p-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-background/90 backdrop-blur-sm border-2 border-border rounded-full p-2 md:p-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Products Carousel */}
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product) => (
                <Card 
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-16px)] snap-center group hover:shadow-strong transition-all duration-300 overflow-hidden border-2 border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-reino-yellow text-background px-3 py-1.5 rounded-full font-bold text-sm flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-current" />
                        {product.rating}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-5 h-5 fill-reino-yellow text-reino-yellow"
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-foreground">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.purchases.toLocaleString()} vendas
                        </span>
                      </div>
                      
                      <Button 
                        variant="hero"
                        size="lg"
                        className="w-full"
                        onClick={() => handlePurchase(product.link)}
                      >
                        <ShoppingCart className="w-5 h-5 mr-2 animate-bounce" />
                        Adquirir Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};