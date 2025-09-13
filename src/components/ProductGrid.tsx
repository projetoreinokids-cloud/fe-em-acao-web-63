import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description?: string;
  driveLink: string;
  image?: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  const handleProductClick = (driveLink: string) => {
    window.open(driveLink, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Clique em qualquer item para acessar diretamente no Google Drive
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="group animate-scale-hover shadow-soft hover:shadow-medium border-border/50 cursor-pointer"
            onClick={() => handleProductClick(product.driveLink)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {product.image ? (
                  <div className="flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                ) : (
                  <div className="bg-reino-pink/10 p-3 rounded-lg group-hover:bg-reino-pink/20 transition-colors">
                    <FileText className="w-6 h-6 text-reino-pink" />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-4 truncate">
                    {product.name}
                  </h3>
                  
                  <Button 
                    variant="hero" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow"
                  >
                    Acessar PDF
                    <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};