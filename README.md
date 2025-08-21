Markdown

# Cai's Simple Task Manager (TypeScript & HTML)

This project is a simple Task Manager web application built using TypeScript and HTML. It allows users to add tasks, mark them as complete, delete tasks, and view a list of all tasks.

**Note:** This implementation uses a `completed` (boolean) property for task status. Tasks are stored in **localStorage** to maintain persistence. The project includes **Task and TaskManager classes written in TypeScript** which handle task creation, completion, deletion, and rendering.

## Requirements

* Web Browser
* Node.js and npm (Optional, for building TypeScript)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. **Open `index.html` in your web browser:**

    Simply navigate to the project directory and open the `index.html` file.

## Project Structure
```bash
task-manager/
├── index.html    # Main HTML file for the application
├── style.css     # CSS styling for the app
├── task.ts       # TypeScript code for Task and TaskManager classes
└── task.js       # Compiled JavaScript file generated from task.ts
```
## Task and TaskManager Classes (TypeScript)

### Task Interface

* **Properties:**
    * `id` (number): Unique identifier for the task.
    * `title` (string): Title of the task.
    * `description` (string): Description of the task.
    * `completed` (boolean): Status of the task (true if completed, false otherwise)

# Task Manager (TypeScript & HTML)

This project is a simple Task Manager web application built using **TypeScript** and **HTML**. It allows users to add tasks, mark them as completed, delete tasks, and view all tasks in a card layout.

## TaskManager Class

The **TaskManager** class handles all task operations in the app.

### Methods

* `addTask(task: Task): void` - Adds a task to the list  
* `getTaskById(id: number): Task | undefined` - Retrieves a task by its ID  
* `markComplete(id: number): void` - Marks a task as completed  
* `deleteTask(id: number): void` - Deletes a task by ID  
* `renderTasks(): void` - Renders all tasks in the HTML container  
* `saveTasks(): void` - Saves tasks to `localStorage`  
* `loadTasks(): void` - Loads tasks from `localStorage`  

---

## HTML Structure (index.html)

* Includes **Bootstrap** for basic styling (optional)  
* Contains input fields for **Task Title** and **Task Description**  
* "Add Task" button to submit a new task  
* Displays the list of tasks in a **card layout**  

---

## TypeScript Compilation (Optional)

To modify TypeScript code (`task.ts`) and generate JavaScript (`task.js`):

1. **Install TypeScript globally:**
```bash
npm install -g typescript
```

2.  **Compile the code:**

    ```bash
    tsc task.ts
    ```

    This will generate `task.js` in the same directory.

## Usage

**Adding Tasks:**  
* Enter the task name and description  
* Click the **"Add Task"** button  

**Viewing Tasks:**  
* Tasks appear in the list below the form  

**Marking Tasks Complete:**  
* Click the **"Complete"** button on a task  

**Deleting Tasks:**  
* Click the **"Delete"** button on a task  

**Persistence:**  
* Tasks are saved in **localStorage** and persist across page reloads  

---

## Note

* This project uses **TypeScript** for the **Task** and **TaskManager** classes.  
* `completed` is a **boolean property**, controlling the status of the task.  
* Bootstrap is used for styling. Internet access is required to load the Bootstrap CDN, or you can download it locally.# task_manager
