
import React, { useState } from 'react';
import { Camera, X, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '../Layout/Header';

interface AddListingScreenProps {
  onBack: () => void;
  onPublish: (listing: any) => void;
}

const AddListingScreen: React.FC<AddListingScreenProps> = ({ onBack, onPublish }) => {
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    swapPreferences: ''
  });

  const categories = [
    'إلكترونيات',
    'كتب ومجلات',
    'ملابس وأزياء',
    'منزل وحديقة',
    'رياضة ولياقة',
    'ألعاب وهوايات',
    'مجوهرات وساعات',
    'أدوات ومعدات',
    'أخرى'
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && images.length < 3) {
      const newImages = Array.from(files).slice(0, 3 - images.length);
      newImages.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages(prev => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.category || images.length === 0) {
      alert('يرجى ملء جميع الحقول المطلوبة وإضافة صورة واحدة على الأقل');
      return;
    }

    const listing = {
      ...formData,
      images,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    onPublish(listing);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        title="إضافة إعلان"
        showBack={true}
        onBack={onBack}
      />

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="space-y-6">
          {/* Image Upload Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Label className="text-base font-semibold text-gray-900 dark:text-white mb-3 block text-right">
              الصور (حتى 3 صور) *
            </Label>
            
            <div className="grid grid-cols-3 gap-3">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={image}
                    alt={`صورة ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              
              {images.length < 3 && (
                <label className="aspect-square border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <Camera size={24} className="text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500 text-center">إضافة صورة</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Item Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block text-right">
                عنوان الإعلان *
              </Label>
              <Input
                type="text"
                placeholder="مثال: لابتوب ديل مستعمل بحالة ممتازة"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-right"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block text-right">
                الوصف *
              </Label>
              <Textarea
                placeholder="اكتب وصفاً مفصلاً عن الغرض المراد مقايضته..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="min-h-[100px] text-right"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block text-right">
                الفئة *
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block text-right">
                ما أريده في المقابل
              </Label>
              <Input
                type="text"
                placeholder="مثال: هاتف ذكي أو كتب أو أي شيء مفيد"
                value={formData.swapPreferences}
                onChange={(e) => handleInputChange('swapPreferences', e.target.value)}
                className="text-right"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block text-right">
                المنطقة
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="مثال: الرياض، حي النرجس"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="text-right pr-10"
                />
                <MapPin size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Publish Button */}
          <Button
            onClick={handlePublish}
            className="w-full h-12 text-base font-semibold"
            size="lg"
          >
            نشر الإعلان
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddListingScreen;
