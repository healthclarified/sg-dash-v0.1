import React, { useState } from 'react';
import { X, Edit3, Sparkles, LayoutGrid, Mic } from 'lucide-react';

interface WritePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WritePostModal: React.FC<WritePostModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    // Here you would typically navigate to the specific workflow
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Write Post</h2>
          <p className="text-gray-600">
            Record your Thoughts and Generate a Post
          </p>
          <p className="text-gray-500 text-sm">
            Share your ideas and let them shine in a post.
          </p>
        </div>

        <div className="space-y-4">
          {/* Write Manually Option */}
          <button
            onClick={() => handleOptionClick('manual')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'manual'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Edit3 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Write Manually</h3>
                <p className="text-gray-600 text-sm">
                  Compose your post by hand for a personal touch.
                </p>
              </div>
            </div>
          </button>

          {/* Repurpose Content Option */}
          <button
            onClick={() => handleOptionClick('repurpose')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'repurpose'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Repurpose from YouTube, Blog, PDF</h3>
                <p className="text-gray-600 text-sm">
                  Transform existing content into new formats.
                </p>
              </div>
            </div>
          </button>

          {/* Create Carousel Option */}
          <button
            onClick={() => handleOptionClick('carousel')}
            className={`w-full p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedOption === 'carousel'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <LayoutGrid className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Create Carousel</h3>
                <p className="text-gray-600 text-sm">
                  Build a captivating carousel for engaging audiences.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePostModal;