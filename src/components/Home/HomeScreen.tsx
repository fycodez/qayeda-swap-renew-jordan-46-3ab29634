
import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from '../Layout/Header';
import CategoryGrid from './CategoryGrid';
import RecentListings from './RecentListings';

interface HomeScreenProps {
  onNotifications: () => void;
  onCategorySelect: (category: string) => void;
  onItemSelect: (itemId: string) => void;
  notificationCount?: number;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onNotifications,
  onCategorySelect,
  onItemSelect,
  notificationCount = 0
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        showLogo={true}
        showNotifications={true}
        onNotifications={onNotifications}
        notificationCount={notificationCount}
      />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Search Bar */}
        <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="ابحث عن أي غرض..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-right"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="p-4 bg-white dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-right">
            تصفح حسب الفئات
          </h2>
          <CategoryGrid onCategorySelect={onCategorySelect} />
        </div>

        {/* Recent Listings */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-right">
            المضاف حديثاً
          </h2>
          <RecentListings onItemSelect={onItemSelect} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
