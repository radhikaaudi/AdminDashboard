export const NAVIGATION_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: 'LayoutDashboard'
  },
  {
    id: 'tables',
    label: 'Tables',
    path: '/tables',
    icon: 'Table'
  },
  {
    id: 'charts',
    label: 'Charts',
    path: '/charts',
    icon: 'BarChart3'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    path: '/calendar',
    icon: 'Calendar'
  },
  {
    id: 'kanban',
    label: 'Kanban',
    path: '/kanban',
    icon: 'Kanban'
  }
];

export const STATS_DATA = [
  {
    title: 'Total Users',
    value: '12,345',
    change: '+12%',
    trend: 'up',
    color: 'primary'
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+8%',
    trend: 'up',
    color: 'success'
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '-3%',
    trend: 'down',
    color: 'warning'
  },
  {
    title: 'Conversion Rate',
    value: '3.45%',
    change: '+2%',
    trend: 'up',
    color: 'secondary'
  }
];

export const SAMPLE_USERS = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-14' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2024-01-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-13' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
  { id: 6, name: 'Eva Davis', email: 'eva@example.com', role: 'User', status: 'Pending', lastLogin: '2024-01-12' },
  { id: 7, name: 'Mike Thompson', email: 'mike@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-11' },
  { id: 8, name: 'Sarah Lee', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-14' }
];

export const KANBAN_INITIAL_DATA = {
  columns: {
    'todo': {
      id: 'todo',
      title: 'To Do',
      color: 'gray',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      color: 'blue',
      taskIds: ['task-4', 'task-5']
    },
    'review': {
      id: 'review',
      title: 'Review',
      color: 'yellow',
      taskIds: ['task-6']
    },
    'done': {
      id: 'done',
      title: 'Done',
      color: 'green',
      taskIds: ['task-7', 'task-8']
    }
  },
  tasks: {
    'task-1': { id: 'task-1', title: 'Design new landing page', description: 'Create wireframes and mockups', priority: 'High' },
    'task-2': { id: 'task-2', title: 'Fix login bug', description: 'Users cannot login with special characters', priority: 'High' },
    'task-3': { id: 'task-3', title: 'Update documentation', description: 'Add new API endpoints documentation', priority: 'Low' },
    'task-4': { id: 'task-4', title: 'Implement dark mode', description: 'Add theme switching functionality', priority: 'Medium' },
    'task-5': { id: 'task-5', title: 'Database migration', description: 'Migrate to new database schema', priority: 'High' },
    'task-6': { id: 'task-6', title: 'Code review for PR #123', description: 'Review authentication changes', priority: 'Medium' },
    'task-7': { id: 'task-7', title: 'Setup CI/CD pipeline', description: 'Configure automated deployment', priority: 'Medium' },
    'task-8': { id: 'task-8', title: 'User testing session', description: 'Conduct usability testing', priority: 'Low' }
  },
  columnOrder: ['todo', 'in-progress', 'review', 'done']
};