// Array para almacenar tareas
let tasks = [];
let currentFilter = 'all';

// Cargar tareas del localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
});

// Permitir agregar tarea con Enter
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Función para agregar tarea
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    input.value = '';
    
    saveTasks();
    renderTasks();
}

// Función para renderizar tareas
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No hay tareas</p>';
        updateTaskCount();
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" 
                   class="task-checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})">
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️ Eliminar</button>
        `;
        taskList.appendChild(li);
    });

    updateTaskCount();
}

// Función para marcar/desmarcar tarea
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Función para eliminar tarea
function deleteTask(id) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
    }
}

// Función para filtrar tareas
function filterTasks(filter) {
    currentFilter = filter;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks();
}

// Obtener tareas filtradas
function getFilteredTasks() {
    switch (currentFilter) {
        case 'active':
            return tasks.filter(t => !t.completed);
        case 'completed':
            return tasks.filter(t => t.completed);
        default:
            return tasks;
    }
}

// Limpiar tareas completadas
function clearCompleted() {
    const completedCount = tasks.filter(t => t.completed).length;
    
    if (completedCount === 0) {
        alert('No hay tareas completadas para eliminar');
        return;
    }

    if (confirm(`¿Eliminar ${completedCount} tarea(s) completada(s)?`)) {
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
        renderTasks();
    }
}

// Actualizar contador de tareas
function updateTaskCount() {
    const activeCount = tasks.filter(t => !t.completed).length;
    document.getElementById('taskCount').textContent = activeCount;
}

// Guardar tareas en localStorage
function saveTasks() {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

// Cargar tareas desde localStorage
function loadTasks() {
    const stored = localStorage.getItem('todo-tasks');
    if (stored) {
        tasks = JSON.parse(stored);
    }
}