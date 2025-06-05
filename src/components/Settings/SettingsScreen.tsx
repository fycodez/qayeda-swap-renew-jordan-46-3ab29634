
import React, { useState } from 'react';
import { Moon, Sun, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Header from '../Layout/Header';

interface SettingsScreenProps {
  onBack: () => void;
  onChangePassword: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onBack,
  onChangePassword,
  darkMode,
  onToggleDarkMode
}) => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        title="الإعدادات"
        showBack={true}
        onBack={onBack}
      />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4 space-y-4">
          {/* Dark Mode Toggle */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Switch
                checked={darkMode}
                onCheckedChange={onToggleDarkMode}
              />
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="text-right">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    الوضع الليلي
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    التبديل بين الوضع الفاتح والداكن
                  </p>
                </div>
                {darkMode ? (
                  <Moon size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </div>
            </div>
          </div>

          {/* Change Password */}
          <button
            onClick={onChangePassword}
            className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <svg
                className="w-5 h-5 text-gray-400 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="text-right">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    تغيير كلمة المرور
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    قم بتحديث كلمة مرور حسابك
                  </p>
                </div>
                <Lock size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>
          </button>

          {/* Additional Settings Placeholders */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4 text-right">
              معلومات التطبيق
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-900 dark:text-white">1.0.0</span>
                <span className="text-gray-600 dark:text-gray-400">الإصدار</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900 dark:text-white">2024.06.05</span>
                <span className="text-gray-600 dark:text-gray-400">البناء</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
