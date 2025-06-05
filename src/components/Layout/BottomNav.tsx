
import React from 'react';
import { Home, Plus, RefreshCw, MessageSquare, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'add', icon: Plus, label: 'إضافة' },
    { id: 'swaps', icon: RefreshCw, label: 'مقايضاتي' },
    { id: 'chats', icon: MessageSquare, label: 'المحادثات' },
    { id: 'profile', icon: User, label: 'الملف الشخصي' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
