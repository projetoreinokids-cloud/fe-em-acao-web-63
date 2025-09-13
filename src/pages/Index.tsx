import { useNavigate } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MostPurchasedSection } from '@/components/MostPurchasedSection';
import { 
  Palette, 
  BookOpen, 
  Gamepad2, 
  Users, 
  Heart, 
  Gift,
  Crown,
  Sparkles
} from 'lucide-react';
import heroImage from '@/assets/reino-kids-hero.jpg';
import bonusImage from '@/assets/bonus-jesus-cartoon.jpg';
import cardColorirImage from '@/assets/final-card-vamos-colorir.jpg';
import cardHistoriasImage from '@/assets/final-card-historias.jpg';
import cardJogosImage from '@/assets/final-card-jogos.jpg';
import cardPersonagensImage from '@/assets/final-card-personagens.jpg';
import cardVirtudesImage from '@/assets/final-card-virtudes.jpg';

export default function Index() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'vamos-colorir',
      title: 'Vamos Colorir',
      description: 'Desenhos bíblicos lindos para colorir e se divertir aprendendo sobre Deus',
      icon: <Palette />,
      image: cardColorirImage,
      itemCount: 5,
      gradient: 'gradient-primary'
    },
    {
      id: 'historias', 
      title: 'Histórias Bíblicas',
      description: 'Histórias emocionantes da Bíblia contadas de forma especial para crianças',
      icon: <BookOpen />,
      image: cardHistoriasImage,
      itemCount: 1,
      gradient: 'gradient-secondary'
    },
    {
      id: 'jogos',
      title: 'Jogos e Atividades', 
      description: 'Jogos divertidos que ensinam valores cristãos de maneira lúdica',
      icon: <Gamepad2 />,
      image: cardJogosImage,
      itemCount: 1,
      gradient: 'bg-reino-blue'
    },
    {
      id: 'personagens',
      title: 'Personagens Bíblicos',
      description: 'Conheça os heróis da fé através de atividades interativas',
      icon: <Users />,
      image: cardPersonagensImage,
      itemCount: 1, 
      gradient: 'bg-reino-green'
    },
    {
      id: 'virtudes',
      title: 'Virtudes Cristãs',
      description: 'Aprenda sobre amor, bondade, paciência e outras virtudes do coração',
      icon: <Heart />,
      image: cardVirtudesImage,
      itemCount: 1,
      gradient: 'bg-reino-orange'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    // Categorias com apenas 1 item vão direto para o link
    const singleItemCategories = {
      'historias': 'https://drive.google.com/file/d/13JYPZGIsnlwF1bI5QmCEqA7OazQhwVC3/view?usp=sharing',
      'jogos': 'https://drive.google.com/file/d/1HSlu0mKESNk9OQ5ddSOIQTDm8muSxd4p/view?usp=sharing',
      'personagens': 'https://drive.google.com/file/d/1Z13oFyNpFHtzrDmD7MRo4z36O1DoLGGR/view?usp=sharing',
      'virtudes': 'https://drive.google.com/file/d/1-42NgGUYEuAvPYi24UTHqsPG5im3h0FD/view?usp=sharing'
    };

    if (singleItemCategories[categoryId as keyof typeof singleItemCategories]) {
      window.open(singleItemCategories[categoryId as keyof typeof singleItemCategories], '_blank');
    } else {
      navigate(`/categoria/${categoryId}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] py-12 md:py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reino-purple via-reino-pink to-reino-orange"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
            <Crown className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-reino-yellow" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              Reino Kids
            </h1>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl mt-4 text-white/90">
            Acesse todo material abaixo
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-12 bg-background">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                image={category.image}
                itemCount={category.itemCount}
                gradient={category.gradient}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-reino-purple/5 via-reino-pink/5 to-reino-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <img 
                src={bonusImage} 
                alt="Conteúdo Bônus"
                className="w-48 h-48 mx-auto mb-8 rounded-2xl shadow-strong object-cover"
              />
              <div className="absolute top-4 right-1/2 transform translate-x-16">
                <Sparkles className="w-8 h-8 text-reino-yellow animate-bounce" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-hero bg-clip-text text-transparent mb-6">
              Conteúdo Bônus Especial
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Material exclusivo e especial para tornar a experiência ainda mais rica e divertida!
            </p>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/categoria/bonus')}
              className="text-lg px-12 py-4"
            >
              <Gift className="w-6 h-6 mr-3" />
              Descobrir Bônus
            </Button>
          </div>
        </div>
      </section>

      {/* Most Purchased Section */}
      <MostPurchasedSection />

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Crown className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Reino Kids
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Compartilhando o amor de Jesus através de atividades criativas e educativas 
            que tocam o coração das crianças.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/oreinokids_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/556798207352?text=ola,%20tudo%20bem?%20peciso%20de%20ajuda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>©️ 2024 Reino Kids</span>
              <span>•</span>
              <span>Feito com ❤️ para Jesus</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}