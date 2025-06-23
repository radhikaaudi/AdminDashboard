import { useDrag } from 'react-dnd';
import { clsx } from 'clsx';

const KanbanCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'border-l-error-500 bg-error-50 dark:bg-error-900/20';
      case 'Medium':
        return 'border-l-warning-500 bg-warning-50 dark:bg-warning-900/20';
      case 'Low':
        return 'border-l-success-500 bg-success-50 dark:bg-success-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <div
      ref={drag}
      className={clsx(
        'p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-l-4 cursor-move transition-all hover:shadow-md',
        getPriorityColor(task.priority),
        isDragging && 'opacity-50 rotate-2'
      )}
    >
      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
        {task.title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {task.description}
      </p>
      <div className="flex items-center justify-between">
        <span className={clsx(
          'px-2 py-1 text-xs font-medium rounded-full',
          task.priority === 'High' && 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-300',
          task.priority === 'Medium' && 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300',
          task.priority === 'Low' && 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300'
        )}>
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default KanbanCard;