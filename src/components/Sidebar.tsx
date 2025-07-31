import React from 'react';
import { 
  Home, 
  Settings, 
  BarChart3, 
  Sparkles, 
  LayoutGrid, 
  Mic, 
  MessageCircle, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Users, 
  Bookmark, 
  Bot,
  PenTool
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onWritePostClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick, onWritePostClick }) => {
  const menuSections = [
    {
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'Content Creation',
      items: [
        { id: 'post-generator', label: 'Post Generator', icon: Sparkles },
        { id: 'carousel-maker', label: 'Carousel Maker', icon: LayoutGrid },
        { id: 'voice-notes', label: 'Voice Notes', icon: Mic },
      ]
    },
    {
      title: 'Engagement',
      items: [
        { id: 'engage', label: 'Engage', icon: MessageCircle },
      ]
    },
    {
      title: 'Drafts & Scheduling',
      items: [
        { id: 'kanban', label: 'Kanban', icon: FileText },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
      ]
    },
    {
      title: 'Content Inspiration',
      items: [
        { id: 'viral-posts', label: 'Viral Posts', icon: TrendingUp },
        { id: 'influencers', label: 'Influencers', icon: Users },
        { id: 'swipe-files', label: 'Swipe Files', icon: Bookmark },
      ]
    },
    {
      title: 'Automation',
      items: [
        { id: 'auto-pilot', label: 'Auto-pilot Posts Generator', icon: Bot },
      ]
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Supergrow</span>
        </div>
      </div>

      {/* Write Post Button */}
      <div className="p-4">
        <button
          onClick={onWritePostClick}
          className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          <PenTool className="w-5 h-5 mr-2" />
          Write Post
        </button>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 pb-4">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {section.title && (
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => onItemClick(item.id)}
                        className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors duration-200 text-sm ${
                          activeItem === item.id
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;