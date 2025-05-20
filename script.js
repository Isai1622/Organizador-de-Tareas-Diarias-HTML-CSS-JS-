/*
    Organizador de Tareas Diarias Interactivo - Lógica Principal
    Autor: Isai Guilbert Gordillo
    GitHub: [https://github.com/Isai1622](https://github.com/Isai1622)
    Descripción:
    Este archivo contiene toda la lógica de JavaScript para la aplicación
    de gestión de tareas. Maneja la adición, visualización, completado,
    eliminación de tareas y la persistencia de datos usando localStorage.
    Lenguajes y Tecnologías Utilizadas:
    - JavaScript (ES6+)
    - localStorage API del navegador
   Última Modificación: 2025-05-19
*/

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDueDateInput = document.getElementById('task-due-date');
    const taskList = document.getElementById('task-list');
    const filterTasksSelect = document.getElementById('filter-tasks');
    const noTasksMessage = document.getElementById('no-tasks-message');
    const clearAllTasksBtn = document.getElementById('clear-all-tasks-btn');

    // Modal de confirmación
    const confirmClearAllModal = document.getElementById('confirm-clear-all-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const confirmClearAllActionBtn = document.getElementById('confirm-clear-all-action-btn');
    const cancelClearAllBtn = document.getElementById('cancel-clear-all-btn');

    // Cargar tareas desde localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Función para guardar tareas en localStorage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Función para renderizar las tareas en la lista
    const renderTasks = (filter = 'all') => {
        taskList.innerHTML = ''; // Limpiar lista actual

        let filteredTasks = tasks;
        if (filter === 'pending') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        }

        if (filteredTasks.length === 0) {
            noTasksMessage.style.display = 'block';
        } else {
            noTasksMessage.style.display = 'none';
            filteredTasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = `task-item bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 ${task.completed ? 'completed' : ''}`;
                taskElement.dataset.id = task.id;

                const taskInfo = document.createElement('div');
                taskInfo.className = 'flex-grow';

                const taskText = document.createElement('span');
                taskText.textContent = task.text;
                taskText.className = `text-slate-800 text-lg ${task.completed ? 'line-through text-green-700' : ''}`;
                taskInfo.appendChild(taskText);

                if (task.dueDate) {
                    const dueDateText = document.createElement('p');
                    const dateObj = new Date(task.dueDate + 'T00:00:00'); // Asegurar que se interprete como fecha local
                    const isPastDue = !task.completed && new Date(dateObj) < new Date(new Date().toDateString()); // Comparar solo fechas
                    
                    dueDateText.textContent = `Límite: ${dateObj.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}`;
                    dueDateText.className = `text-xs mt-1 ${isPastDue ? 'text-red-500 font-semibold' : 'text-slate-500'}`;
                    if(isPastDue) dueDateText.textContent += " (Vencida)";
                    taskInfo.appendChild(dueDateText);
                }
                taskElement.appendChild(taskInfo);

                const taskActions = document.createElement('div');
                taskActions.className = 'flex items-center flex-shrink-0 mt-3 sm:mt-0';

                const completeButton = document.createElement('button');
                completeButton.innerHTML = task.completed ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
                completeButton.title = task.completed ? 'Marcar como pendiente' : 'Marcar como completada';
                completeButton.className = `p-2 rounded-md transition-colors duration-200 ${task.completed ? 'text-amber-500 hover:text-amber-700 hover:bg-amber-100' : 'text-green-500 hover:text-green-700 hover:bg-green-100'} mr-2`;
                completeButton.addEventListener('click', () => toggleCompleteTask(task.id));
                taskActions.appendChild(completeButton);

                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
                deleteButton.title = 'Eliminar tarea';
                deleteButton.className = 'text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-md transition-colors duration-200';
                deleteButton.addEventListener('click', () => deleteTask(task.id));
                taskActions.appendChild(deleteButton);

                taskElement.appendChild(taskActions);
                taskList.appendChild(taskElement);
            });
        }
    };

    // Añadir nueva tarea
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskDueDate = taskDueDateInput.value;

        if (taskText === '') {
            // Podríamos mostrar un mensaje de error más visual aquí
            alert("Por favor, escribe una tarea.");
            return;
        }

        const newTask = {
            id: Date.now().toString(), // ID único simple
            text: taskText,
            dueDate: taskDueDate || null, // Guardar null si no hay fecha
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks(filterTasksSelect.value);
        taskInput.value = '';
        taskDueDateInput.value = ''; // Limpiar campo de fecha
        taskInput.focus();
    });

    // Marcar tarea como completada/pendiente
    const toggleCompleteTask = (id) => {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        renderTasks(filterTasksSelect.value);
    };

    // Eliminar tarea
    const deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks(filterTasksSelect.value);
    };

    // Filtrar tareas
    filterTasksSelect.addEventListener('change', (e) => {
        renderTasks(e.target.value);
    });

    // --- Lógica del Modal de Confirmación ---
    clearAllTasksBtn.addEventListener('click', () => {
        if (tasks.length === 0) {
            Messagebox.show_info("No hay tareas para eliminar.", "Lista Vacía", parent=document.body); // Usando un Messagebox simple
            return;
        }
        confirmClearAllModal.style.display = 'flex'; // Mostrar modal
    });

    closeModalBtn.addEventListener('click', () => {
        confirmClearAllModal.style.display = 'none';
    });

    cancelClearAllBtn.addEventListener('click', () => {
        confirmClearAllModal.style.display = 'none';
    });

    confirmClearAllActionBtn.addEventListener('click', () => {
        tasks = [];
        saveTasks();
        renderTasks(filterTasksSelect.value);
        confirmClearAllModal.style.display = 'none';
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === confirmClearAllModal) {
            confirmClearAllModal.style.display = 'none';
        }
    });
    
    // Renderizar tareas al cargar la página
    renderTasks();
});



const Messagebox = {
    show_info: (message, title) => alert(`[${title || 'Información'}]\n${message}`),
    show_warning: (message, title) => alert(`[${title || 'Advertencia'}]\n${message}`),
    show_error: (message, title) => alert(`[${title || 'Error'}]\n${message}`),
    yesno: (message, title) => confirm(`[${title || 'Confirmar'}]\n${message}`) // Devuelve true/false
};
