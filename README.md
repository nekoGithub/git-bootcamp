# 📘 GUÍA PRÁCTICA DÍA 1: Git, GitHub y Docker

## Bootcamp DevSecOps - Práctica Completa

---

## 📋 TABLA DE CONTENIDOS

1. [Preparación del Entorno](#1-preparación-del-entorno)
2. [Crear Repositorio en GitHub](#2-crear-repositorio-en-github)
3. [Inicializar Proyecto Local](#3-inicializar-proyecto-local)
4. [Flujo Básico de Git](#4-flujo-básico-de-git)
5. [Trabajar con Ramas](#5-trabajar-con-ramas)
6. [GitFlow en Acción](#6-gitflow-en-acción)
7. [Merge y Resolución de Conflictos](#7-merge-y-resolución-de-conflictos)
8. [Revertir Cambios](#8-revertir-cambios)
9. [Dockerizar la Aplicación](#9-dockerizar-la-aplicación)
10. [Despliegue Final](#10-despliegue-final)

---

## 1. PREPARACIÓN DEL ENTORNO

### 📦 Instalar Git

**Linux (Debian/Ubuntu):**
```bash
sudo apt update
sudo apt install git -y
git --version
```

**Verificar instalación:**
```bash
git --version
# Salida esperada: git version 2.34.1 (o superior)
```

### 🔧 Configurar Git

**En tu terminal:**
```bash
# Configurar identidad (CAMBIAR CON TUS DATOS)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Configurar editor (opcional)
git config --global core.editor "code --wait"

# Ver configuración
git config --list
```

### 💻 Instalar Visual Studio Code

**Linux:**
```bash
# Descargar e instalar
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

**Extensiones recomendadas en VS Code:**
- GitLens
- Git Graph
- Docker

### 📁 Crear Directorio de Trabajo

```bash
# Crear carpeta para el proyecto
mkdir ~/bootcamp-git
cd ~/bootcamp-git
```

---

## 2. CREAR REPOSITORIO EN GITHUB

### 🌐 EN EL NAVEGADOR

**Paso 1:** Ir a https://github.com

**Paso 2:** Iniciar sesión (o crear cuenta si no tienes)

**Paso 3:** Crear nuevo repositorio
- Click en el botón **"+"** (arriba derecha)
- Click en **"New repository"**

**Paso 4:** Configurar repositorio
```
Repository name: todo-app-bootcamp
Description: Sistema de gestión de tareas - Bootcamp DevSecOps
Public ✅
☐ Add a README file (NO MARCAR - lo haremos localmente)
☐ Add .gitignore
☐ Choose a license
```

**Paso 5:** Click en **"Create repository"**

**Paso 6:** Copiar la URL del repositorio
```
https://github.com/TU_USUARIO/todo-app-bootcamp.git
```

---

## 3. INICIALIZAR PROYECTO LOCAL

### 💻 EN VISUAL STUDIO CODE

**Paso 1:** Abrir VS Code
```bash
cd ~/bootcamp-git
code .
```

**Paso 2:** Abrir terminal integrada
- Atajo: `Ctrl + Ñ` (o `Ctrl + \``)
- O Menu: Terminal → New Terminal

**Paso 3:** Clonar repositorio
```bash
git clone https://github.com/TU_USUARIO/todo-app-bootcamp.git
cd todo-app-bootcamp
```

**Paso 4:** Crear estructura del proyecto

**EN VS CODE:** Crear estos archivos (Click derecho → New File)

```
todo-app-bootcamp/
├── README.md
├── index.html
├── styles.css
├── app.js
└── .gitignore
```

### 📝 Contenido de los archivos

**README.md:**
```markdown
# 📝 To-Do App - Bootcamp DevSecOps

Sistema de gestión de tareas desarrollado durante el Bootcamp DevSecOps.

## 🚀 Características

- ✅ Agregar tareas
- ✅ Marcar como completadas
- ✅ Eliminar tareas
- ✅ Persistencia en LocalStorage
- ✅ Interfaz responsive

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Docker

## 👥 Equipo

- Developer 1: [Tu Nombre]
- Developer 2: [Compañero 1]
- Developer 3: [Compañero 2]

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/todo-app-bootcamp.git

# Abrir index.html en navegador
```

## 🐳 Docker

```bash
# Construir imagen
docker build -t todo-app .

# Ejecutar contenedor
docker run -p 8080:80 todo-app
```

## 📄 Licencia

MIT License
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App - Bootcamp DevSecOps</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 To-Do App</h1>
            <p class="subtitle">Bootcamp DevSecOps - Version 1.0.0</p>
        </header>

        <div class="input-section">
            <input type="text" id="taskInput" placeholder="Escribe una nueva tarea...">
            <button id="addBtn" onclick="addTask()">Agregar</button>
        </div>

        <div class="filters">
            <button class="filter-btn active" onclick="filterTasks('all')">Todas</button>
            <button class="filter-btn" onclick="filterTasks('active')">Activas</button>
            <button class="filter-btn" onclick="filterTasks('completed')">Completadas</button>
        </div>

        <ul id="taskList" class="task-list"></ul>

        <footer>
            <p>Tareas pendientes: <span id="taskCount">0</span></p>
            <button id="clearBtn" onclick="clearCompleted()">Limpiar completadas</button>
        </footer>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

**styles.css:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 600px;
    padding: 30px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: #667eea;
    font-size: 2.5em;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 0.9em;
}

.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#taskInput {
    flex: 1;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

#taskInput:focus {
    outline: none;
    border-color: #667eea;
}

button {
    padding: 15px 25px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
}

button:hover {
    background: #5568d3;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    padding: 8px 16px;
    background: #f0f0f0;
    color: #333;
    font-size: 14px;
}

.filter-btn.active {
    background: #667eea;
    color: white;
}

.task-list {
    list-style: none;
    margin-bottom: 20px;
}

.task-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: all 0.3s;
}

.task-item:hover {
    background: #f0f0f0;
    transform: translateX(5px);
}

.task-item.completed {
    opacity: 0.6;
}

.task-item.completed .task-text {
    text-decoration: line-through;
    color: #999;
}

.task-checkbox {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.task-text {
    flex: 1;
    font-size: 16px;
    color: #333;
}

.delete-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
}

.delete-btn:hover {
    background: #c0392b;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 2px solid #e0e0e0;
}

footer p {
    color: #666;
    font-size: 14px;
}

#taskCount {
    font-weight: bold;
    color: #667eea;
}

#clearBtn {
    background: #95a5a6;
    font-size: 14px;
    padding: 10px 15px;
}

#clearBtn:hover {
    background: #7f8c8d;
}

/* Responsive */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }

    h1 {
        font-size: 2em;
    }

    .input-section {
        flex-direction: column;
    }

    .filters {
        flex-direction: column;
    }
}
```

**app.js:**
```javascript
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
```

**.gitignore:**
```
# Node modules
node_modules/

# Logs
*.log
logs/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Build files
dist/
build/

# Environment
.env
.env.local
```

---

## 4. FLUJO BÁSICO DE GIT

### 💻 EN VS CODE - TERMINAL

**Paso 1: Verificar estado**
```bash
git status
```

**Salida esperada:**
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        app.js
        index.html
        styles.css

nothing added to commit but untracked files present (use "git add" to track)
```

**Paso 2: Agregar archivos al staging**
```bash
# Opción 1: Agregar todos los archivos
git add .

# Opción 2: Agregar archivo por archivo
git add README.md
git add index.html
git add styles.css
git add app.js
git add .gitignore
```

**Paso 3: Verificar staging**
```bash
git status
```

**Salida esperada:**
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   README.md
        new file:   app.js
        new file:   index.html
        new file:   styles.css
```

**Paso 4: Primer commit**
```bash
git commit -m "Initial commit: Estructura básica del proyecto"
```

**Salida esperada:**
```
[main (root-commit) abc1234] Initial commit: Estructura básica del proyecto
 5 files changed, 350 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 app.js
 create mode 100644 index.html
 create mode 100644 styles.css
```

**Paso 5: Conectar con GitHub**
```bash
# Verificar remote (no debería haber ninguno si clonaste vacío)
git remote -v

# Si no hay remote, agregar
git remote add origin https://github.com/TU_USUARIO/todo-app-bootcamp.git

# Verificar rama actual
git branch

# Renombrar a main si es necesario
git branch -M main
```

**Paso 6: Push al repositorio remoto**
```bash
git push -u origin main
```

**Si pide autenticación:**
- Usuario: tu_usuario_github
- Password: usar Personal Access Token (no tu contraseña)

**Crear Token:** https://github.com/settings/tokens
- Click en "Generate new token (classic)"
- Note: "Bootcamp DevSecOps"
- Expiration: 30 days
- Scopes: ✅ repo
- Generate token
- **COPIAR TOKEN** (no lo volverás a ver)

### 🌐 VERIFICAR EN GITHUB

**EN EL NAVEGADOR:**
1. Ir a: https://github.com/TU_USUARIO/todo-app-bootcamp
2. Deberías ver todos tus archivos
3. Ver el commit message: "Initial commit: Estructura básica del proyecto"

---

## 5. TRABAJAR CON RAMAS

### 💻 EN VS CODE - TERMINAL

**Paso 1: Ver ramas existentes**
```bash
git branch
```

**Salida:**
```
* main
```

**Paso 2: Crear rama de desarrollo**
```bash
git branch develop
git checkout develop

# O en un solo comando:
git checkout -b develop
```

**Paso 3: Verificar rama actual**
```bash
git branch
```

**Salida:**
```
* develop
  main
```

**Paso 4: Push de develop a GitHub**
```bash
git push -u origin develop
```

### 🌐 VERIFICAR EN GITHUB

**EN EL NAVEGADOR:**
1. Ir al repositorio
2. Click en el selector de ramas (donde dice "main")
3. Deberías ver: main y develop

---

## 6. GITFLOW EN ACCIÓN

### 👥 SIMULACIÓN DE EQUIPO (3 DESARROLLADORES)

#### **Developer 1: Feature - Mejorar diseño** 🎨

**💻 EN VS CODE:**

**Paso 1: Crear rama feature**
```bash
# Asegurarse de estar en develop
git checkout develop

# Crear rama feature
git checkout -b feature/mejora-diseño
```

**Paso 2: Modificar styles.css**

**EN VS CODE:** Editar `styles.css` - Agregar al final:

```css
/* Mejoras de diseño - Developer 1 */
.task-item {
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.task-item:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

button {
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

**Paso 3: Commit de cambios**
```bash
git add styles.css
git commit -m "feat: Mejorar sombras y diseño de botones"
git push -u origin feature/mejora-diseño
```

**Paso 4: Ver cambios en navegador**
```bash
# Abrir index.html en navegador
firefox index.html
# O
google-chrome index.html
# O simplemente doble click en el archivo
```

---

#### **Developer 2: Feature - Agregar contador de tiempo** ⏰

**💻 EN TERMINAL (simular otro desarrollador):**

```bash
# Volver a develop
git checkout develop

# Crear nueva feature
git checkout -b feature/contador-tiempo
```

**EN VS CODE:** Modificar `app.js` - Agregar después de la línea 3:

```javascript
// Feature: Contador de tiempo - Developer 2
function getTimeAgo(dateString) {
    const now = new Date();
    const created = new Date(dateString);
    const diffMs = now - created;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Ahora';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    return `Hace ${diffDays}d`;
}
```

**Modificar la función renderTasks** - Cambiar esta parte:

```javascript
// Buscar esta línea (aprox línea 62):
<span class="task-text">${task.text}</span>

// Reemplazar por:
<span class="task-text">
    ${task.text}
    <small style="color: #999; font-size: 12px; display: block; margin-top: 5px;">
        ${getTimeAgo(task.createdAt)}
    </small>
</span>
```

**Commit:**
```bash
git add app.js
git commit -m "feat: Agregar timestamp a tareas"
git push -u origin feature/contador-tiempo
```

---

#### **Developer 3: Feature - Categorías de tareas** 🏷️

**💻 EN TERMINAL:**

```bash
git checkout develop
git checkout -b feature/categorias
```

**EN VS CODE:** Modificar `index.html` - En la sección de input:

```html
<!-- Buscar esta sección (línea 14-17): -->
<div class="input-section">
    <input type="text" id="taskInput" placeholder="Escribe una nueva tarea...">
    <button id="addBtn" onclick="addTask()">Agregar</button>
</div>

<!-- REEMPLAZAR por: -->
<div class="input-section">
    <input type="text" id="taskInput" placeholder="Escribe una nueva tarea...">
    <select id="categorySelect">
        <option value="personal">🏠 Personal</option>
        <option value="trabajo">💼 Trabajo</option>
        <option value="urgente">🔥 Urgente</option>
    </select>
    <button id="addBtn" onclick="addTask()">Agregar</button>
</div>
```

**Modificar `styles.css`** - Agregar:

```css
/* Categorías - Developer 3 */
#categorySelect {
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    cursor: pointer;
}
```

**Modificar `app.js`** - En la función addTask:

```javascript
// Buscar esta parte (línea 24-30):
const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString()
};

// REEMPLAZAR por:
const category = document.getElementById('categorySelect').value;
const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString(),
    category: category
};
```

**En la función renderTasks, modificar el HTML:**

```javascript
// Buscar (línea 62):
<span class="task-text">${task.text}</span>

// REEMPLAZAR por:
<span class="task-text">
    <span style="font-weight: bold;">${getCategoryIcon(task.category)}</span>
    ${task.text}
</span>
```

**Agregar función auxiliar:**

```javascript
// Agregar al final del archivo
function getCategoryIcon(category) {
    const icons = {
        'personal': '🏠',
        'trabajo': '💼',
        'urgente': '🔥'
    };
    return icons[category] || '📝';
}
```

**Commit:**
```bash
git add .
git commit -m "feat: Agregar sistema de categorías a tareas"
git push -u origin feature/categorias
```

---

## 7. MERGE Y RESOLUCIÓN DE CONFLICTOS

### 🔀 MERGE DE FEATURES A DEVELOP

#### **Merge 1: feature/mejora-diseño → develop**

```bash
# Ir a develop
git checkout develop

# Merge de feature/mejora-diseño
git merge feature/mejora-diseño
```

**Salida esperada:**
```
Updating abc1234..def5678
Fast-forward
 styles.css | 10 ++++++++++
 1 file changed, 10 insertions(+)
```

**Push a GitHub:**
```bash
git push origin develop
```

---

#### **Merge 2: feature/contador-tiempo → develop**

```bash
# Asegurarse de estar en develop
git checkout develop

# Merge
git merge feature/contador-tiempo
```

**Salida esperada:**
```
Updating def5678..ghi9012
Fast-forward
 app.js | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
```

```bash
git push origin develop
```

---

#### **Merge 3: feature/categorias → develop (CONFLICTO)**

```bash
git checkout develop
git merge feature/categorias
```

**Salida esperada:**
```
Auto-merging app.js
CONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.
```

### 🔧 RESOLVER CONFLICTO

**💻 EN VS CODE:**

**Paso 1:** VS Code mostrará el conflicto con colores:

```javascript
<<<<<<< HEAD
<span class="task-text">
    ${task.text}
    <small style="color: #999; font-size: 12px; display: block; margin-top: 5px;">
        ${getTimeAgo(task.createdAt)}
    </small>
</span>
=======
<span class="task-text">
    <span style="font-weight: bold;">${getCategoryIcon(task.category)}</span>
    ${task.text}
</span>
>>>>>>> feature/categorias
```

**Paso 2:** Combinar ambas funcionalidades:

```javascript
// SOLUCIÓN: Mantener ambas características
<span class="task-text">
    <span style="font-weight: bold;">${getCategoryIcon(task.category)}</span>
    ${task.text}
    <small style="color: #999; font-size: 12px; display: block; margin-top: 5px;">
        ${getTimeAgo(task.createdAt)}
    </small>
</span>
```

**Paso 3:** Marcar como resuelto:

```bash
git add app.js
git commit -m "merge: Resolver conflicto entre contador-tiempo y categorias"
git push origin develop
```

### 🧪 PROBAR EN NAVEGADOR

```bash
# Abrir index.html
firefox index.html
```

**Verificar que funcione:**
- ✅ Diseño mejorado (sombras)
- ✅ Timestamp en tareas
- ✅ Selector de categorías
- ✅ Íconos por categoría

---

## 8. REVERTIR CAMBIOS

### 📝 ESCENARIO: "Ups, el timestamp rompe el layout móvil"

**Simulación de bug:**

```bash
git checkout develop
```

**💻 Ver historial:**
```bash
git log --oneline
```

**Salida:**
```
abc1234 (HEAD -> develop) merge: Resolver conflicto entre contador-tiempo y categorias
def5678 feat: Agregar sistema de categorías a tareas
ghi9012 feat: Agregar timestamp a tareas
jkl3456 feat: Mejorar sombras y diseño de botones
mno7890 Initial commit: Estructura básica del proyecto
```

### 🔄 OPCIÓN 1: Revertir último commit (sin perder historial)

```bash
git revert HEAD
```

**Editor se abrirá:**
```
Revert "merge: Resolver conflicto entre contador-tiempo y categorias"

This reverts commit abc1234.
```

**Guardar y cerrar** (`:wq` en vim o Ctrl+X en nano)

**Verificar:**
```bash
git log --oneline
```

---

### ⏮️ OPCIÓN 2: Volver a commit específico (reescribir historial)

**⚠️ PELIGROSO - Solo si no has pusheado:**

```bash
# Ver commit al que quieres volver
git log --oneline

# Volver y mantener cambios en working directory
git reset --soft jkl3456

# O volver y descartar todos los cambios
git reset --hard jkl3456
```

---

### 🔧 OPCIÓN 3: Crear rama de hotfix

```bash
# Desde develop
git checkout develop

# Crear rama de hotfix
git checkout -b hotfix/fix-mobile-layout
```

**Modificar styles.css:**

```css
/* Hotfix: Mejorar layout móvil */
@media (max-width: 600px) {
    .task-text small {
        font-size: 10px;
        margin-top: 3px;
    }
}
```

**Commit y merge:**
```bash
git add styles.css
git commit -m "hotfix: Arreglar layout móvil del timestamp"

# Merge a develop
git checkout develop
git merge hotfix/fix-mobile-layout

# Merge a main (producción)
git checkout main
git merge hotfix/fix-mobile-layout

git push origin main
git push origin develop
```

---

## 9. DOCKERIZAR LA APLICACIÓN

### 🐳 CREAR DOCKERFILE

**💻 EN VS CODE:** Crear archivo `Dockerfile` en la raíz:

```dockerfile
# Imagen base ligera de Nginx
FROM nginx:alpine

# Metadata
LABEL maintainer="tu@email.com"
LABEL description="To-Do App - Bootcamp DevSecOps"
LABEL version="1.0.0"

# Copiar archivos de la aplicación al directorio de Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Exponer puerto 80
EXPOSE 80

# Nginx ya tiene un CMD por defecto, no necesitamos especificarlo
# Pero si quisiéramos personalizarlo:
# CMD ["nginx", "-g", "daemon off;"]
```

### 📄 CREAR .dockerignore

**EN VS CODE:** Crear `.dockerignore`:

```
.git
.gitignore
README.md
node_modules
*.log
.DS_Store
```

### 🔧 CREAR docker-compose.yml (opcional)

**EN VS CODE:** Crear `docker-compose.yml`:

```yaml
version: '3.8'

services:
  todo-app:
    build: .
    container_name: todo-app-bootcamp
    ports:
      - "8080:80"
    restart: unless-stopped
    labels:
      - "app=todo-app"
      - "environment=development"
```

### 💾 COMMIT DE ARCHIVOS DOCKER

```bash
git add Dockerfile .dockerignore docker-compose.yml
git commit -m "docker: Agregar configuración de Docker"
git push origin develop
```

---

## 10. DESPLIEGUE FINAL

### 🏗️ CONSTRUIR IMAGEN DOCKER

**💻 EN TERMINAL:**

```bash
# Asegurarse de estar en la raíz del proyecto
cd ~/bootcamp-git/todo-app-bootcamp

# Construir imagen
docker build -t todo-app:1.0 .
```

**Salida esperada:**
```
[+] Building 5.2s (8/8) FINISHED
 => [internal] load build definition from Dockerfile
 => => transferring dockerfile: 389B
 => [internal] load .dockerignore
 => [internal] load metadata for docker.io/library/nginx:alpine
 => [1/3] FROM docker.io/library/nginx:alpine
 => [internal] load build context
 => => transferring context: 12.45kB
 => [2/3] COPY index.html /usr/share/nginx/html/
 => [3/3] COPY styles.css /usr/share/nginx/html/
 => [4/3] COPY app.js /usr/share/nginx/html/
 => exporting to image
 => => exporting layers
 => => writing image sha256:abc123...
 => => naming to docker.io/library/todo-app:1.0
```

**Verificar imagen:**
```bash
docker images | grep todo-app
```

**Salida:**
```
todo-app    1.0    abc123def456    2 minutes ago    25MB
```

---

### 🚀 EJECUTAR CONTENEDOR

**Opción 1: Docker run**
```bash
docker run -d \
  --name todo-app-container \
  -p 8080:80 \
  todo-app:1.0
```

**Opción 2: Docker Compose**
```bash
docker-compose up -d
```

**Verificar contenedor:**
```bash
docker ps
```

**Salida:**
```
CONTAINER ID   IMAGE          COMMAND                  STATUS         PORTS                  NAMES
abc123def456   todo-app:1.0   "/docker-entrypoint.…"   Up 5 seconds   0.0.0.0:8080->80/tcp   todo-app-container
```

---

### 🌐 ACCEDER A LA APLICACIÓN

**EN EL NAVEGADOR:**

1. Abrir: http://localhost:8080

**Deberías ver:**
- 📝 Aplicación To-Do funcionando
- ✅ Diseño con gradiente morado
- ✅ Selector de categorías
- ✅ Timestamps en tareas
- ✅ Filtros funcionales

**Probar funcionalidad:**
```
1. Agregar tarea: "Configurar Jenkins"
2. Seleccionar categoría: 💼 Trabajo
3. Agregar tarea: "Estudiar Kubernetes"
4. Marcar como completada
5. Verificar timestamp
6. Filtrar por "Completadas"
```

---

### 📊 VER LOGS DEL CONTENEDOR

```bash
# Ver logs
docker logs -f todo-app-container

# Ver recursos usados
docker stats todo-app-container
```

---

## 🎯 MERGE A MAIN (PRODUCCIÓN)

### 🔀 RELEASE A PRODUCCIÓN

```bash
# Ir a develop
git checkout develop

# Asegurarse de tener todo actualizado
git pull origin develop

# Crear rama de release
git checkout -b release/v1.0.0
```

**Actualizar version en README.md:**
```markdown
# Cambiar línea:
<p class="subtitle">Bootcamp DevSecOps - Version 1.0.0</p>
```

**Commit:**
```bash
git add README.md
git commit -m "release: Version 1.0.0"
```

**Merge a main:**
```bash
git checkout main
git merge release/v1.0.0
git push origin main
```

**Crear tag:**
```bash
git tag -a v1.0.0 -m "Version 1.0.0 - Primera release"
git push origin v1.0.0
```

**Merge de vuelta a develop:**
```bash
git checkout develop
git merge release/v1.0.0
git push origin develop
```

---

## 🌐 VERIFICAR EN GITHUB

### EN EL NAVEGADOR:

**1. Ver Branches:**
- Ir al repositorio
- Click en "branches"
- Deberías ver: main, develop, y todas las features

**2. Ver Tags:**
- Click en "releases" o "tags"
- Deberías ver: v1.0.0

**3. Ver Network Graph:**
- Ir a: Insights → Network
- Ver el flujo completo de GitFlow

**4. Ver Commits:**
- Click en "commits"
- Ver historial completo

---

## 📦 PUSH A DOCKER HUB (BONUS)

### 🐳 SUBIR IMAGEN A DOCKER HUB

```bash
# Login en Docker Hub
docker login

# Tag de imagen
docker tag todo-app:1.0 TU_USUARIO_DOCKERHUB/todo-app:1.0
docker tag todo-app:1.0 TU_USUARIO_DOCKERHUB/todo-app:latest

# Push
docker push TU_USUARIO_DOCKERHUB/todo-app:1.0
docker push TU_USUARIO_DOCKERHUB/todo-app:latest
```

**Ahora cualquiera puede ejecutar:**
```bash
docker run -p 8080:80 TU_USUARIO_DOCKERHUB/todo-app:latest
```

---

## 🧪 COMANDOS DE VERIFICACIÓN FINAL

### 📋 CHECKLIST COMPLETO

```bash
# 1. Ver estructura de ramas
git branch -a

# 2. Ver historial
git log --oneline --graph --all --decorate

# 3. Ver remotes
git remote -v

# 4. Ver tags
git tag

# 5. Ver estado de Docker
docker ps
docker images

# 6. Ver archivos en el contenedor
docker exec todo-app-container ls -la /usr/share/nginx/html/

# 7. Acceder al shell del contenedor
docker exec -it todo-app-container sh

# Dentro del contenedor:
cat /usr/share/nginx/html/index.html
exit
```

---

## 🎓 RESUMEN DE LO APRENDIDO

### ✅ Git & GitHub
- [x] Inicializar repositorio
- [x] Commits y staging
- [x] Push y pull
- [x] Crear y gestionar ramas
- [x] Merge (fast-forward y 3-way)
- [x] Resolver conflictos
- [x] Revertir cambios
- [x] GitFlow completo
- [x] Tags y releases

### ✅ Docker
- [x] Crear Dockerfile
- [x] Construir imágenes
- [x] Ejecutar contenedores
- [x] Docker Compose
- [x] Logs y debugging
- [x] Push a Docker Hub

### ✅ Desarrollo
- [x] HTML5 semántico
- [x] CSS3 moderno
- [x] JavaScript vanilla
- [x] LocalStorage
- [x] Responsive design

---

## 🔗 RECURSOS ADICIONALES

### 📚 Documentación
- Git: https://git-scm.com/doc
- GitHub: https://docs.github.com
- Docker: https://docs.docker.com

### 🎮 Práctica Interactiva
- Learn Git Branching: https://learngitbranching.js.org
- Git Exercises: https://gitexercises.fracz.com

### 🛠️ Herramientas
- GitKraken (GUI): https://www.gitkraken.com
- SourceTree (GUI): https://www.sourcetreeapp.com
- Git Graph (VS Code Extension)

---

## 🚀 PRÓXIMOS PASOS

### Día 2: Jenkins CI/CD
```
Mañana aprenderemos:
✅ Instalar Jenkins en Docker
✅ Crear pipeline básico
✅ Integrar con GitHub
✅ Automatizar build y deploy
✅ Webhooks automáticos
```

### Preparación para mañana:
```bash
# Dejar el contenedor corriendo
docker ps

# El proyecto queda listo para Jenkins
```

---

## 🆘 TROUBLESHOOTING

### Problemas Comunes

**1. Git rechaza push:**
```bash
# Solución: Pull primero
git pull origin main --rebase
git push origin main
```

**2. Contenedor no inicia:**
```bash
# Ver logs
docker logs todo-app-container

# Verificar puerto ocupado
netstat -tlnp | grep 8080

# Usar otro puerto
docker run -p 9090:80 todo-app:1.0
```

**3. Conflictos de merge:**
```bash
# Abortar merge
git merge --abort

# O resolver manualmente en VS Code
```

**4. Olvidé en qué rama estoy:**
```bash
git branch
git status
```

---

## 🎉 ¡FELICIDADES!

Has completado exitosamente:
- ✅ Proyecto funcional en Git
- ✅ GitFlow completo con 3 desarrolladores
- ✅ Aplicación dockerizada
- ✅ Deploy funcional

**Tu app está corriendo en:** http://localhost:8080

**Captura de pantalla y comparte tu logro!** 📸

---

## 📝 NOTAS FINALES

**Guardar este archivo:**
```bash
# Crear archivo de guía
code ~/bootcamp-git/GUIA-PRACTICA-DIA-1.md

# Copiar todo este contenido
# Guardar
```

**Mantener el proyecto para mañana:**
- No eliminar el repositorio
- No eliminar el contenedor
- Tener Docker corriendo

---

**🔥 Preparado para el Día 2: Jenkins CI/CD Pipeline 🔥**

---

**Última actualización:** Octubre de 2025  
**Versión:** 1.0.0  
**Autor:** Sadam Jose Quispe chino