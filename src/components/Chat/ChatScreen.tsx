
import React, { useState } from 'react';
import { ArrowLeft, Send, Image, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../Layout/Header';

interface ChatScreenProps {
  onBack: () => void;
  chatId?: number;
}

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
  type: 'text' | 'image';
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onBack, chatId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'مرحباً، أنا مهتم بمقايضة كتابي مع لابتوبك',
      sender: 'other',
      time: '10:30',
      type: 'text'
    },
    {
      id: 2,
      text: 'أهلاً، يمكنني أن أرى صور الكتاب؟',
      sender: 'me',
      time: '10:32',
      type: 'text'
    },
    {
      id: 3,
      text: 'بالطبع، سأرسل لك الصور الآن',
      sender: 'other',
      time: '10:33',
      type: 'text'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString('ar-SA', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        type: 'text'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        title="أحمد محمد"
        showBack={true}
        onBack={onBack}
      />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === 'me'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className={`text-xs mt-1 block ${
                msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Paperclip size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Image size={20} />
          </Button>

          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك..."
              className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-right"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>

          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white"
            size="icon"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
