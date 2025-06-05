
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

// Auth Components
import WelcomeScreen from '@/components/Auth/WelcomeScreen';
import LoginScreen from '@/components/Auth/LoginScreen';

// Layout Components
import BottomNav from '@/components/Layout/BottomNav';

// Screen Components
import HomeScreen from '@/components/Home/HomeScreen';
import ProfileScreen from '@/components/Profile/ProfileScreen';
import SettingsScreen from '@/components/Settings/SettingsScreen';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Auth handlers
  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log('Login attempt:', credentials);
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('welcome');
    setActiveTab('home');
  };

  // Navigation handlers
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  const handleBackToProfile = () => {
    setCurrentScreen('profile');
  };

  // Mock handlers for features to be implemented
  const handleNotifications = () => {
    console.log('Open notifications');
  };

  const handleCategorySelect = (category: string) => {
    console.log('Selected category:', category);
  };

  const handleItemSelect = (itemId: string) => {
    console.log('Selected item:', itemId);
  };

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleMyListings = () => {
    console.log('My listings');
  };

  const handleChangePassword = () => {
    console.log('Change password');
  };

  // Render authentication screens
  if (!isAuthenticated) {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            onLogin={() => setCurrentScreen('login')}
            onSignup={() => setCurrentScreen('signup')}
          />
        );
      
      case 'login':
        return (
          <LoginScreen
            onBack={() => setCurrentScreen('welcome')}
            onLogin={handleLogin}
            onForgotPassword={() => setCurrentScreen('forgot')}
          />
        );
      
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
              <RefreshCw size={48} className="text-primary mx-auto mb-4 animate-spin" />
              <p className="text-gray-600 dark:text-gray-400">جاري التحميل...</p>
            </div>
          </div>
        );
    }
  }

  // Render main application screens
  const renderMainScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onNotifications={handleNotifications}
            onCategorySelect={handleCategorySelect}
            onItemSelect={handleItemSelect}
            notificationCount={3}
          />
        );
      
      case 'add':
        return (
          <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-center p-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                إضافة إعلان
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                هذه الميزة قريباً...
              </p>
            </div>
          </div>
        );
      
      case 'swaps':
        return (
          <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-center p-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                مقايضاتي
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                هذه الميزة قريباً...
              </p>
            </div>
          </div>
        );
      
      case 'chats':
        return (
          <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-center p-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                المحادثات
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                هذه الميزة قريباً...
              </p>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <ProfileScreen
            onEditProfile={handleEditProfile}
            onMyListings={handleMyListings}
            onSettings={() => setCurrentScreen('settings')}
            onLogout={handleLogout}
          />
        );
      
      case 'settings':
        return (
          <SettingsScreen
            onBack={handleBackToProfile}
            onChangePassword={handleChangePassword}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
          />
        );
      
      default:
        return (
          <HomeScreen
            onNotifications={handleNotifications}
            onCategorySelect={handleCategorySelect}
            onItemSelect={handleItemSelect}
            notificationCount={3}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {renderMainScreen()}
      {!['settings'].includes(currentScreen) && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default Index;
