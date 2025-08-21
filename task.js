var TaskManager = /** @class */ (function () {
    function TaskManager(containerId) {
        var _this = this;
        this.tasks = [];
        this.nextId = 1;
        var container = document.getElementById(containerId);
        if (!container)
            throw new Error("Container not found");
        this.taskContainer = container;
        this.loadTasks();
        this.renderTasks();
        this.setupForm();
    }
    TaskManager.prototype.setupForm = function () {
        var _this = this;
        var addBtn = document.getElementById('addTaskBtn');
        var titleInput = document.getElementById('taskTitle');
        var descInput = document.getElementById('taskDescription');
        addBtn.addEventListener('click', function () {
            if (titleInput.value && descInput.value) {
                _this.addTask({
                    id: _this.nextId++,
                    title: titleInput.value,
                    description: descInput.value,
                    completed: false
                });
                titleInput.value = '';
                descInput.value = '';
            }
        });
    };
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
    };
    TaskManager.prototype.markComplete = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = true;
            this.saveTasks();
            this.renderTasks();
        }
    };
    TaskManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (t) { return t.id !== id; });
        this.saveTasks();
        this.renderTasks();
    };
    TaskManager.prototype.saveTasks = function () {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
    TaskManager.prototype.loadTasks = function () {
        var saved = localStorage.getItem('tasks');
        if (saved) {
            this.tasks = JSON.parse(saved);
            if (this.tasks.length > 0) {
                this.nextId = Math.max.apply(Math, this.tasks.map(function (t) { return t.id; })) + 1;
            }
        }
    };
    TaskManager.prototype.renderTasks = function () {
        var _this = this;
        this.taskContainer.innerHTML = '';
        this.tasks.forEach(function (task) {
            var card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = "\n        <div class=\"task-info\">\n          <div class=\"task-title\">" + task.title + "</div>\n          <div class=\"task-desc\">" + task.description + "</div>\n        </div>\n        <div class=\"d-flex align-items-center\">\n          <div class=\"task-status " + (task.completed ? 'completed' : 'in-progress') + "\">\n            " + (task.completed ? 'Completed' : 'In Progress') + "\n          </div>\n          <div class=\"task-actions ms-2\">\n            " + (!task.completed ? "<button class=\"btn-complete\">Complete</button>" : '') + "\n            <button class=\"btn-delete\">Delete</button>\n          </div>\n        </div>\n      ";
            var completeBtn = card.querySelector('.btn-complete');
            if (completeBtn)
                completeBtn.addEventListener('click', function () { return _this.markComplete(task.id); });
            var deleteBtn = card.querySelector('.btn-delete');
            deleteBtn.addEventListener('click', function () { return _this.deleteTask(task.id); });
            _this.taskContainer.appendChild(card);
        });
    };
    return TaskManager;
}());
document.addEventListener('DOMContentLoaded', function () {
    new TaskManager('taskContainer');
});
