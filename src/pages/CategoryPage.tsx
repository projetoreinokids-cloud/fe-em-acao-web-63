import { useParams, useNavigate } from 'react-router-dom';
import { ProductGrid } from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Crown } from 'lucide-react';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import cacaPalavrasImage from '@/assets/bonus-caca-palavras.jpg';
import ebookAmorImage from '@/assets/bonus-ebook-amor.jpg';
import historiasColorirImage from '@/assets/bonus-historias-colorir.jpg';
import labirintoImage from '@/assets/bonus-labirinto.jpg';
import versiculosImage from '@/assets/bonus-versiculos.jpg';
import colorirSalmosImage from '@/assets/new-colorir-salmos.jpg';
import colorirParte1Image from '@/assets/colorir-parte1.jpg';
import colorirParte2Image from '@/assets/colorir-parte2.jpg';
import colorirParte3Image from '@/assets/colorir-parte3.jpg';
import colorirParte4Image from '@/assets/colorir-parte4.jpg';

// Dados dos produtos baseados na imagem fornecida
const productsData = {
  'vamos-colorir': [
    {
      id: '1',
      name: 'Reino Kids - Salmos para Colorir (SBB)',
      description: 'Salmos bíblicos ilustrados para colorir',
      driveLink: 'https://drive.google.com/file/d/1xOPMNpnx3RSaxrksDsWaauPZ83AEnzyV/view?usp=drive_link',
      image: colorirSalmosImage
    },
    {
      id: '2', 
      name: 'Reino Kids - Vamos Colorir (Parte 1)',
      description: 'Primeira parte da coleção de desenhos para colorir',
      driveLink: 'https://drive.google.com/file/d/1UrFT5X0MY4X2k-ZtBDUiCfQLnImcxR9y/view?usp=sharing',
      image: colorirParte1Image
    },
    {
      id: '3',
      name: 'Reino Kids - Vamos Colorir (Parte 2)', 
      description: 'Segunda parte da coleção de desenhos para colorir',
      driveLink: 'https://drive.google.com/file/d/1UiBfhsTwbUQ5LNU9syCTvWAoqqwfCdFB/view?usp=sharing',
      image: colorirParte2Image
    },
    {
      id: '4',
      name: 'Reino Kids - Vamos Colorir (Parte 3)',
      description: 'Terceira parte da coleção de desenhos para colorir', 
      driveLink: 'https://drive.google.com/file/d/1Aib3be9bJPh7omZPsARilqDp2goTRIKF/view?usp=drive_link',
      image: colorirParte3Image
    },
    {
      id: '5',
      name: 'Reino Kids - Vamos Colorir (Parte 4)',
      description: 'Quarta parte da coleção de desenhos para colorir',
      driveLink: 'https://drive.google.com/file/d/1rkli66o2K62awMmiv5JpKrwZ_ENDdTRk/view?usp=drive_link',
      image: colorirParte4Image
    }
  ],
  'historias': [
    {
      id: '6',
      name: 'Reino Kids - Histórias',
      description: 'Coleção de histórias bíblicas ilustradas',
      driveLink: 'https://drive.google.com/file/d/13JYPZGIsnlwF1bI5QmCEqA7OazQhwVC3/view?usp=sharing'
    }
  ],
  'jogos': [
    {
      id: '7', 
      name: 'Reino Kids - Jogo da Memória (V2)',
      description: 'Jogo da memória com temas bíblicos - versão 2',
      driveLink: 'https://drive.google.com/file/d/1HSlu0mKESNk9OQ5ddSOIQTDm8muSxd4p/view?usp=sharing'
    }
  ],
  'personagens': [
    {
      id: '8',
      name: 'Reino Kids - Personagens',
      description: 'Personagens bíblicos para atividades',
      driveLink: 'https://drive.google.com/file/d/1Z13oFyNpFHtzrDmD7MRo4z36O1DoLGGR/view?usp=sharing'
    }
  ],
  'virtudes': [
    {
      id: '9',
      name: 'Reino Kids - Virtudes', 
      description: 'Atividades sobre virtudes cristãs',
      driveLink: 'https://drive.google.com/file/d/1-42NgGUYEuAvPYi24UTHqsPG5im3h0FD/view?usp=sharing'
    }
  ],
  'bonus': [
    {
      id: '10',
      name: 'Reino Kids - Bônus Caça Palavras',
      description: 'Caça-palavras com temas bíblicos para diversão e aprendizado',
      driveLink: 'https://drive.google.com/file/d/1RoJlnpFddWqP97hQm2nuKj4J94ymicgw/view?usp=sharing',
      image: cacaPalavrasImage
    },
    {
      id: '11',
      name: 'Reino Kids - Bônus E-book Deus é Amor',
      description: 'E-book especial sobre o amor de Deus para crianças',
      driveLink: 'https://drive.google.com/file/d/1wuAT5t1rwE0dVMrURpHEzCKnUSadReIq/view?usp=sharing',
      image: ebookAmorImage
    },
    {
      id: '12',
      name: 'Reino Kids - Bônus Histórias Bíblicas para Contar e Colorir',
      description: 'Histórias bíblicas ilustradas para contar e colorir',
      driveLink: 'https://drive.google.com/file/d/1HdUpoMVVg75Y3SQDFNWsTchuYo2FOwly/view?usp=sharing',
      image: historiasColorirImage
    },
    {
      id: '13',
      name: 'Reino Kids - Bônus Labirinto (Atualizado)',
      description: 'Labirintos temáticos com desafios bíblicos divertidos',
      driveLink: 'https://drive.google.com/file/d/1hSot2UGx3NrmVDejeybVkAg7KXE96qC3/view?usp=sharing',
      image: labirintoImage
    },
    {
      id: '14',
      name: 'Reino Kids - Bônus Versículos e Promessas (Estilo Bobbie Goods)',
      description: 'Versículos e promessas bíblicas em estilo especial',
      driveLink: 'https://drive.google.com/file/d/13d3I8ry2jjkWHc1b5kkCOByzSZrsfQM2/view?usp=sharing',
      image: versiculosImage
    }
  ]
};

const categoryTitles = {
  'vamos-colorir': 'Vamos Colorir',
  'historias': 'Histórias Bíblicas',
  'jogos': 'Jogos e Atividades', 
  'personagens': 'Personagens Bíblicos',
  'virtudes': 'Virtudes Cristãs',
  'bonus': 'Conteúdo Bônus'
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  if (!category || !productsData[category as keyof typeof productsData]) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
          <Button onClick={() => navigate('/')} variant="hero">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </div>
      </div>
    );
  }

  const products = productsData[category as keyof typeof productsData];
  const title = categoryTitles[category as keyof typeof categoryTitles];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center relative">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="hover:bg-primary/10 absolute left-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center">
              <Crown className="w-6 h-6 text-primary mr-2" />
              <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                Reino Kids
              </h1>
            </div>
            
            <div className="cursor-pointer absolute right-0" onClick={() => navigate('/')}>
              <Home className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <ProductGrid products={products} title={title} />
      </main>

      {/* Components flutuantes */}
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}