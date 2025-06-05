
import React from 'react';
import { Edit, List, Settings, LogOut, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../Layout/Header';

interface ProfileScreenProps {
  onEditProfile: () => void;
  onMyListings: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onEditProfile,
  onMyListings,
  onSettings,
  onLogout
}) => {
  // Mock user data
  const user = {
    name: 'Ahmed Al-Mansouri',
    email: 'ahmed.mansouri@email.com',
    phone: '+962 79 123 4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4.8,
    totalSwaps: 23
  };

  const menuItems = [
    {
      id: 'edit',
      title: 'Edit Profile',
      icon: Edit,
      onClick: onEditProfile,
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      id: 'listings',
      title: 'My Listings',
      icon: List,
      onClick: onMyListings,
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      onClick: onSettings,
      color: 'text-gray-700 dark:text-gray-300'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="Profile" />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile Info */}
        <div className="bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                <Star size={12} fill="currentColor" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {user.email}
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1 rtl:ml-1 rtl:mr-0" fill="currentColor" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.rating}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {user.totalSwaps} swaps completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Icon size={20} className={item.color} />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="p-4 pt-2">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full h-12 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut size={20} className="mr-2 rtl:ml-2 rtl:mr-0" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
