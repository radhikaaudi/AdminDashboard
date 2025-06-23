import KanbanBoard from '../components/Kanban/KanbanBoard';

const KanbanPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Kanban Board
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Manage tasks with drag and drop
        </div>
      </div>

      <KanbanBoard />
    </div>
  );
};

export default KanbanPage;