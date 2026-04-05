import express from 'express';
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// API Routes
// Serve the frontend (static files) from ../frontend/build (production) or ../frontend (development)
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'build');
const frontendDevPath = path.join(__dirname, '..', 'frontend');

// Check if build folder exists, otherwise use dev folder
const fs = require('fs');
const frontendPath = fs.existsSync(frontendBuildPath) ? frontendBuildPath : frontendDevPath;
app.use(express.static(frontendPath));

// In-memory tasks data
let tasks = [
  { 
    id: 1, 
    title: 'Complete project documentation', 
    description: 'Write comprehensive documentation for the task management system',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-12-31',
    createdAt: new Date().toISOString()
  },
  { 
    id: 2, 
    title: 'Review code changes', 
    description: 'Review pull requests from the team',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2024-12-25',
    createdAt: new Date().toISOString()
  },
  { 
    id: 3, 
    title: 'Update dependencies', 
    description: 'Update npm packages to latest versions',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-12-20',
    createdAt: new Date().toISOString()
  }
];

let nextId = 4;

// Get all tasks
app.get('/api/tasks', (req, res) => {
  const { status, priority } = req.query;
  let filteredTasks = tasks;

  if (status) {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  if (priority) {
    filteredTasks = filteredTasks.filter(task => task.priority === priority);
  }

  res.json(filteredTasks);
});

// Get single task
app.get('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

// Create task
app.post('/api/tasks', (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description?.trim() || '',
    status: status || 'pending',
    priority: priority || 'medium',
    dueDate: dueDate || null,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((t) => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const { title, description, status, priority, dueDate } = req.body;
  const existing = tasks[index];
  
  tasks[index] = {
    ...existing,
    title: title !== undefined ? title.trim() : existing.title,
    description: description !== undefined ? description.trim() : existing.description,
    status: status || existing.status,
    priority: priority || existing.priority,
    dueDate: dueDate !== undefined ? dueDate : existing.dueDate
  };

  res.json(tasks[index]);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((t) => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  const deleted = tasks.splice(index, 1)[0];
  res.json(deleted);
});

// Serve React app for all non-API routes (for client-side routing)
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendPath, 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Task Management Server running on http://localhost:${PORT}`);
  console.log(`📦 Serving frontend from: ${frontendPath}`);
  console.log(`🌐 Open http://localhost:${PORT} in your browser`);
});


