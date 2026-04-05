import React from 'react';
import './FilterBar.css';

const FilterBar = ({
  filterStatus,
  filterPriority,
  searchTerm,
  onStatusChange,
  onPriorityChange,
  onSearchChange,
  onRefresh,
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="filter-select"
        value={filterStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        className="filter-select"
        value={filterPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
      >
        <option value="all">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button className="btn btn-refresh" onClick={onRefresh} title="Refresh">
        🔄 Refresh
      </button>
    </div>
  );
};

export default FilterBar;





