
import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onLogin: () => void;
  onSignup: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin, onSignup }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
          <RefreshCw size={40} className="text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          قايدة
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
          قايض بأمان.<br />
          جدد أغراضك مجاناً.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <Button 
          onClick={onSignup}
          className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90"
        >
          إنشاء حساب
        </Button>
        
        <Button 
          onClick={onLogin}
          variant="outline"
          className="w-full h-12 text-base font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          تسجيل الدخول
        </Button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          انضم لآلاف المستخدمين في الأردن<br />
          لتبادل الأغراض والخدمات
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
