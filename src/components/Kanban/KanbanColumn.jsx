import { useDrop } from 'react-dnd';
import KanbanCard from './KanbanCard';
import { clsx } from 'clsx';

const KanbanColumn = ({ column, tasks, onTaskMove }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'task',
    drop: (item) => onTaskMove(item.id, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const getColumnColor = (color) => {
    switch (color) {
      case 'blue':
        return 'border-t-primary-500';
      case 'yellow':
        return 'border-t-warning-500';
      case 'green':
        return 'border-t-success-500';
      default:
        return 'border-t-gray-500';
    }
  };

  return (
    <div
      ref={drop}
      className={clsx(
        'bg-gray-100 dark:bg-gray-700 rounded-lg p-4 min-h-[500px] border-t-4 transition-colors',
        getColumnColor(column.color),
        isOver && 'bg-gray-200 dark:bg-gray-600'
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {column.title}
        </h3>
        <span className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;