import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Table, 
  BarChart3, 
  Calendar, 
  Kanban, 
  X,
  ChevronLeft
} from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { clsx } from 'clsx';

const iconMap = {
  LayoutDashboard,
  Table,
  BarChart3,
  Calendar,
  Kanban
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={clsx(
        'fixed inset-y-0 left-0 z-30 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        collapsed ? 'w-16' : 'w-64'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Admin Panel
              </span>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="hidden lg:block p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.id}
                to={item.path}
                className={clsx(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors',
                  isActive 
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                  collapsed && 'justify-center'
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse button for desktop */}
        {collapsed && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setCollapsed(false)}
              className="w-full p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center"
            >
              <LayoutDashboard className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;