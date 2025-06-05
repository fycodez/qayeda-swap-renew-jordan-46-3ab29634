
import React from 'react';
import { Laptop, Car, Shirt, Book, Settings, Package } from 'lucide-react';

interface CategoryGridProps {
  onCategorySelect: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect }) => {
  const categories = [
    { id: 'electronics', name: 'Electronics', icon: Laptop, color: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
    { id: 'furniture', name: 'Furniture', icon: Package, color: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
    { id: 'cars', name: 'Cars', icon: Car, color: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-600 dark:text-red-400' },
    { id: 'clothes', name: 'Clothes', icon: Shirt, color: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
    { id: 'books', name: 'Books', icon: Book, color: 'bg-yellow-100 dark:bg-yellow-900/30', iconColor: 'text-yellow-600 dark:text-yellow-400' },
    { id: 'services', name: 'Services', icon: Settings, color: 'bg-pink-100 dark:bg-pink-900/30', iconColor: 'text-pink-600 dark:text-pink-400' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`${category.color} p-4 rounded-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center aspect-square`}
          >
            <Icon size={24} className={`${category.iconColor} mb-2`} />
            <span className={`text-sm font-medium ${category.iconColor}`}>
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryGrid;
