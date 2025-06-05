
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginScreenProps {
  onBack: () => void;
  onLogin: (credentials: { email: string; password: string }) => void;
  onForgotPassword: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onBack, onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onLogin({ email, password });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
          تسجيل الدخول
        </h1>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              أهلاً بعودتك
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              سجل دخولك لمتابعة رحلة التبادل
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">البريد الإلكتروني أو رقم الهاتف</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني أو رقم هاتفك"
                className="h-12 mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                نسيت كلمة المرور؟
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
