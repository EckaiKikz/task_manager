interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;
  private taskContainer: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) throw new Error("Container not found");
    this.taskContainer = container;

    this.loadTasks();
    this.renderTasks();
    this.setupForm();
  }

  private setupForm(): void {
    const addBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
    const titleInput = document.getElementById('taskTitle') as HTMLInputElement;
    const descInput = document.getElementById('taskDescription') as HTMLInputElement;

    addBtn.addEventListener('click', () => {
      if (titleInput.value && descInput.value) {
        this.addTask({
          id: this.nextId++,
          title: titleInput.value,
          description: descInput.value,
          completed: false
        });
        titleInput.value = '';
        descInput.value = '';
      }
    });
  }

  private addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
    this.renderTasks();
  }

  private markComplete(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      this.saveTasks();
      this.renderTasks();
    }
  }

  private deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      this.tasks = JSON.parse(saved);
      if (this.tasks.length > 0) {
        this.nextId = Math.max(...this.tasks.map(t => t.id)) + 1;
      }
    }
  }

  private renderTasks(): void {
    this.taskContainer.innerHTML = '';
    this.tasks.forEach(task => {
      const card = document.createElement('div');
      card.className = 'task-card';

      card.innerHTML = `
        <div class="task-info">
          <div class="task-title">${task.title}</div>
          <div class="task-desc">${task.description}</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="task-status ${task.completed ? 'completed' : 'in-progress'}">
            ${task.completed ? 'Completed' : 'In Progress'}
          </div>
          <div class="task-actions ms-2">
            ${!task.completed ? `<button class="btn-complete">Complete</button>` : ''}
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      `;

      const completeBtn = card.querySelector('.btn-complete') as HTMLButtonElement;
      if (completeBtn) completeBtn.addEventListener('click', () => this.markComplete(task.id));

      const deleteBtn = card.querySelector('.btn-delete') as HTMLButtonElement;
      deleteBtn.addEventListener('click', () => this.deleteTask(task.id));

      this.taskContainer.appendChild(card);
    });
  }
}

// Initialize TaskManager when page loads
document.addEventListener('DOMContentLoaded', () => {
  new TaskManager('taskContainer');
});
