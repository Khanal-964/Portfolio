import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onEdit, onDelete, onUpdate }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      default:
        return 'status-pending';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      default:
        return 'priority-low';
    }
  };

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const getStatusLabel = (status) => {
    return status
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleStatusToggle = () => {
    let newStatus;
    if (task.status === 'pending') {
      newStatus = 'in-progress';
    } else if (task.status === 'in-progress') {
      newStatus = 'completed';
    } else {
      newStatus = 'pending';
    }

    onUpdate(task.id, { ...task, status: newStatus });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isOverdue = (dateString) => {
    if (!dateString) return false;
    const dueDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== 'completed';
  };

  return (
    <div className={`task-card ${getStatusClass(task.status)}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className={`priority-badge ${getPriorityClass(task.priority)}`}>
          {getPriorityLabel(task.priority)}
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <div className={`status-badge ${getStatusClass(task.status)}`}>
          {getStatusLabel(task.status)}
        </div>
        <div className={`due-date ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
          📅 {formatDate(task.dueDate)}
        </div>
      </div>

      <div className="task-actions">
        <button
          className="btn btn-status"
          onClick={handleStatusToggle}
          title="Toggle status"
        >
          {task.status === 'completed' ? '↩️ Undo' : '✓ Mark Complete'}
        </button>
        <button
          className="btn btn-edit"
          onClick={() => onEdit(task)}
          title="Edit task"
        >
          ✏️ Edit
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;





