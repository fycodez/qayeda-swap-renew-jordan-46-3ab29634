
import React from 'react';
import { ArrowLeft, Bell, User, RefreshCw, MessageSquare, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../Layout/Header';

interface NotificationsScreenProps {
  onBack: () => void;
  onOpenChat?: (notificationId: number) => void;
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ onBack, onOpenChat }) => {
  const notifications = [
    {
      id: 1,
      type: 'swap_request',
      title: 'طلب مقايضة جديد',
      message: 'أحمد يريد مقايضة كتابه مع لابتوبك',
      time: 'منذ 5 دقائق',
      read: false,
      icon: RefreshCw
    },
    {
      id: 2,
      type: 'message',
      title: 'رسالة جديدة',
      message: 'فاطمة أرسلت رسالة بخصوص الهاتف',
      time: 'منذ ساعة',
      read: false,
      icon: MessageSquare
    },
    {
      id: 3,
      type: 'swap_request',
      title: 'طلب مقايضة جديد',
      message: 'سارة تريد مقايضة ساعتها مع كاميراك',
      time: 'منذ يومين',
      read: true,
      icon: RefreshCw
    },
    {
      id: 4,
      type: 'profile',
      title: 'تحديث الملف الشخصي',
      message: 'تم تحديث ملفك الشخصي بنجاح',
      time: 'منذ أسبوع',
      read: true,
      icon: User
    }
  ];

  const handleAccept = (notificationId: number) => {
    console.log('Accepted notification:', notificationId);
    if (onOpenChat) {
      onOpenChat(notificationId);
    }
  };

  const handleReject = (notificationId: number) => {
    console.log('Rejected notification:', notificationId);
    // Here you would typically update the notification status
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        title="الإشعارات"
        showBack={true}
        onBack={onBack}
      />

      <div className="flex-1 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <Bell size={64} className="text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              لا توجد إشعارات
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ستظهر إشعاراتك هنا عندما تصلك
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              const isSwapRequest = notification.type === 'swap_request';
              
              return (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className={`p-2 rounded-full ${
                      !notification.read 
                        ? 'bg-blue-100 dark:bg-blue-900' 
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <Icon size={20} className={
                        !notification.read 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-600 dark:text-gray-400'
                      } />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-medium ${
                          !notification.read 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-right">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-right">
                        {notification.time}
                      </p>
                      
                      {isSwapRequest && (
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            onClick={() => handleAccept(notification.id)}
                            className="bg-green-500 hover:bg-green-600 text-white"
                          >
                            <Check size={16} className="ml-1" />
                            قبول
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(notification.id)}
                            className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <X size={16} className="ml-1" />
                            رفض
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsScreen;
