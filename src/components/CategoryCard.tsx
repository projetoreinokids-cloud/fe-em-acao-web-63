import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  itemCount: number;
  onClick: () => void;
  gradient?: string;
}

export const CategoryCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  itemCount, 
  onClick,
  gradient = "gradient-primary"
}: CategoryCardProps) => {
  return (
    <Card className="group animate-scale-hover shadow-soft hover:shadow-medium border-border/50 overflow-hidden">
      <div className={`h-32 ${gradient} relative flex items-center justify-center`}>
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div className="text-white text-4xl animate-float">
            {icon}
          </div>
        )}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-reino-purple bg-reino-purple/10 px-3 py-1 rounded-full">
            {itemCount} {itemCount === 1 ? 'item' : 'itens'}
          </span>
          
          <Button 
            variant="category" 
            size="sm" 
            onClick={onClick}
            className="group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Acessar
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};