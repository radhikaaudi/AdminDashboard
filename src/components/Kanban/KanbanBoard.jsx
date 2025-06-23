import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanColumn from './KanbanColumn';
import { KANBAN_INITIAL_DATA } from '../../utils/constants';

const KanbanBoard = () => {
  const [kanbanData, setKanbanData] = useState(KANBAN_INITIAL_DATA);

  const handleTaskMove = (taskId, targetColumnId) => {
    const sourceColumnId = Object.keys(kanbanData.columns).find(columnId =>
      kanbanData.columns[columnId].taskIds.includes(taskId)
    );

    if (sourceColumnId === targetColumnId) return;

    setKanbanData(prev => {
      const newColumns = { ...prev.columns };
      
      // Remove task from source column
      newColumns[sourceColumnId] = {
        ...newColumns[sourceColumnId],
        taskIds: newColumns[sourceColumnId].taskIds.filter(id => id !== taskId)
      };
      
      // Add task to target column
      newColumns[targetColumnId] = {
        ...newColumns[targetColumnId],
        taskIds: [...newColumns[targetColumnId].taskIds, taskId]
      };

      return {
        ...prev,
        columns: newColumns
      };
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kanbanData.columnOrder.map(columnId => {
          const column = kanbanData.columns[columnId];
          const tasks = column.taskIds.map(taskId => kanbanData.tasks[taskId]);
          
          return (
            <KanbanColumn
              key={column.id}
              column={column}
              tasks={tasks}
              onTaskMove={handleTaskMove}
            />
          );
        })}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;