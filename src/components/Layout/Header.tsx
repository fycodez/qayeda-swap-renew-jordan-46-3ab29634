
import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
  showBack?: boolean;
  showNotifications?: boolean;
  onBack?: () => void;
  onNotifications?: () => void;
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showLogo = false,
  showBack = false,
  showNotifications = false,
  onBack,
  onNotifications,
  notificationCount = 0
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          )}
          
          {showLogo ? (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <RefreshCw size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-primary">Qayeda</h1>
            </div>
          ) : (
            title && (
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white mr-3">
                {title}
              </h1>
            )
          )}
        </div>

        {showNotifications && (
          <button
            onClick={onNotifications}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
