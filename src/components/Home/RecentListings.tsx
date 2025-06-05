
import React from 'react';
import { MapPin } from 'lucide-react';

interface RecentListingsProps {
  onItemSelect: (itemId: string) => void;
}

const RecentListings: React.FC<RecentListingsProps> = ({ onItemSelect }) => {
  // Mock data - in real app this would come from API
  const recentItems = [
    {
      id: '1',
      name: 'iPhone 13 Pro',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
      location: 'Amman - Khalda',
      wantedItem: 'Samsung Galaxy S23',
      timeAgo: '2 hours ago'
    },
    {
      id: '2',
      name: 'MacBook Air M2',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop',
      location: 'Irbid - University Area',
      wantedItem: 'Gaming Laptop',
      timeAgo: '4 hours ago'
    },
    {
      id: '3',
      name: 'Toyota Camry 2020',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=300&fit=crop',
      location: 'Zarqa - New Zarqa',
      wantedItem: 'Honda Accord',
      timeAgo: '6 hours ago'
    },
    {
      id: '4',
      name: 'Sofa Set',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      location: 'Amman - Abdoun',
      wantedItem: 'Dining Table',
      timeAgo: '8 hours ago'
    }
  ];

  return (
    <div className="space-y-3">
      {recentItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemSelect(item.id)}
          className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            
            <div className="flex-1 text-left rtl:text-right min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 truncate">
                {item.name}
              </h3>
              
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                <MapPin size={12} className="mr-1 rtl:ml-1 rtl:mr-0 flex-shrink-0" />
                <span className="truncate">{item.location}</span>
              </div>
              
              <p className="text-xs text-primary font-medium mb-1">
                Looking for: {item.wantedItem}
              </p>
              
              <p className="text-xs text-gray-400">
                {item.timeAgo}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RecentListings;
