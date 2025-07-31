import React from 'react';
import { Edit3, MessageCircle, Play, Sparkles, Mic, TrendingUp, ChevronRight, ArrowRight } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WritePostModal from './components/WritePostModal';
import PostComposer from './components/PostComposer';

function App() {
  const [activeMenuItem, setActiveMenuItem] = React.useState('dashboard');
  const [showWritePostModal, setShowWritePostModal] = React.useState(false);
  const [showPostComposer, setShowPostComposer] = React.useState(false);
  const [composerMode, setComposerMode] = React.useState<'manual' | 'repurpose' | 'carousel'>('manual');

  const handleWritePostClick = () => {
    setShowWritePostModal(true);
  };

  const handleWritePostModalClose = () => {
    setShowWritePostModal(false);
  };

  const handleComposerOpen = (mode: 'manual' | 'repurpose' | 'carousel') => {
    setComposerMode(mode);
    setShowWritePostModal(false);
    setShowPostComposer(true);
  };

  const handleComposerClose = () => {
    setShowPostComposer(false);
  };

  const tutorials = [
    {
      title: "Convert your raw thoughts into engaging LinkedIn Posts",
      description: "Convert your raw thoughts into engaging LinkedIn Posts",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Turn a YouTube video into a LinkedIn post.",
      description: "How to Turn a YouTube video into a LinkedIn post",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Generate LinkedIn carousel in minutes",
      description: "Generate LinkedIn carousel in minutes",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Get inspiration from viral LinkedIn posts",
      description: "Get inspiration from viral LinkedIn posts",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Personalized LinkedIn posts on Auto-Pilot",
      description: "How to setup Auto-Pilot posts",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Create your own feed and engage with the right people",
      description: "How to use Engage feature for your LinkedIn network",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeItem={activeMenuItem} 
        onItemClick={setActiveMenuItem}
        onWritePostClick={handleWritePostClick}
      />
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Let's get started to build your LinkedIn audience</p>
        </div>

        {/* Daily Action Items */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Daily Action Items</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Edit3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Publish a Post</h3>
                    <p className="text-gray-600">Join the conversation and build connections with meaningful posts.</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Not posted anything</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Comment on Posts</h3>
                    <p className="text-gray-600">Join the conversation and build connections with meaningful comments.</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">0/10 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch & Learn */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Watch & Learn</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
              <span>View All Tutorials</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {tutorials.map((tutorial, index) => (
                <div key={index} className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Supergrow</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer">
                        <Play className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended for you */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Start from existing content</h3>
              <p className="text-gray-600 mb-6">Breathe new life into your previous content to create fresh, engaging material.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
                <span>GO TO POST GENERATOR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Start from recording voice notes</h3>
              <p className="text-gray-600 mb-6">Easily turn your voice memos into polished written content.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
                <span>GO TO VOICE NOTES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Get inspired by others</h3>
              <p className="text-gray-600 mb-6">Discover trending, high-performing content to spark new ideas for your own posts.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
                <span>GO TO VIRAL CONTENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Write Post Modal */}
      <WritePostModal 
        isOpen={showWritePostModal}
        onClose={handleWritePostModalClose}
      />
      
      {/* Post Composer */}
      <PostComposer
        isOpen={showPostComposer}
        onClose={handleComposerClose}
        mode={composerMode}
      />
      </div>
    </div>
  );
}

export default App;