import React, { useState } from 'react';
import { X, Save, Send, Calendar, Globe, Users, Lock } from 'lucide-react';

interface PostComposerProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'manual' | 'repurpose' | 'carousel';
}

const PostComposer: React.FC<PostComposerProps> = ({ isOpen, onClose, mode }) => {
  const [postContent, setPostContent] = useState('');
  const [showSaveOptions, setShowSaveOptions] = useState(false);

  if (!isOpen) return null;

  const handleSaveAsDraft = () => {
    setShowSaveOptions(true);
  };

  const handlePublishOptions = () => {
    // Handle publish options
    console.log('Opening publish options');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {mode === 'manual' && 'Write Post Manually'}
            {mode === 'repurpose' && 'Repurpose Content'}
            {mode === 'carousel' && 'Create Carousel'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Content
            </label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind? Share your thoughts..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Character Count */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">
              {postContent.length} characters
            </span>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Public</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSaveAsDraft}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <Save className="w-4 h-4" />
                <span>Save as Draft</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePublishOptions}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                <Send className="w-4 h-4" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>

        {/* Save Options Modal */}
        {showSaveOptions && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Options</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Save className="w-5 h-5 text-gray-600" />
                    <span>Save as Draft</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <span>Create Public Link</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span>Schedule</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Send className="w-5 h-5 text-gray-600" />
                    <span>Publish</span>
                  </div>
                </button>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowSaveOptions(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostComposer;