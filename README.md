# Kanban Board — Task Management App

A Kanban-style task management application built with **React JS** that allows users to create, organize, and move tasks between columns. Features drag-and-drop interaction, global state management using Context API, and local persistence using localStorage.

---

## Live Demo

> Run locally using the steps in the [Getting Started](#-getting-started) section below.

---

## Features

- **Three Columns** — To Do, In Progress, Done
- **Add / Edit / Delete Tasks** — via a clean modal form
- **Drag and Drop** — move task cards between columns using `dnd-kit`
- **Task Details** — title, description, priority, status, deadline, tags
- **Priority Badges** — Low (green), Medium (amber), High (red)
- **Tags System** — add multiple tags per task as pills
- **Deadline Tracking** — overdue tasks highlighted in red
- **localStorage Persistence** — data saved across page refreshes
- **Responsive Layout** — works on desktop and mobile using TailwindCSS

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React JS | UI framework |
| TailwindCSS | Styling and responsive layout |
| dnd-kit | Drag and drop functionality |
| Context API | Global task state management |
| React Hooks | `useState`, `useEffect`, `useContext` |
| localStorage | Client-side data persistence |
| uuid | Unique ID generation for tasks |

---

## Folder Structure

```
src/
├── components/
│   ├── Board.jsx        # Main board with DnD context and column layout
│   ├── Column.jsx       # Individual column with droppable zone
│   ├── TaskCard.jsx     # Draggable task card with edit/delete
│   └── TaskModal.jsx    # Modal form for add/edit task
├── context/
│   └── TaskContext.jsx  # Context API — global task state + localStorage sync
├── App.jsx              # Root component with TaskProvider
├── main.jsx             # React DOM entry point
└── index.css            # Global styles + TailwindCSS import
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/kanban-board.git

# 2. Navigate into the project folder
cd kanban-board

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will run at `http://localhost:5173`

---

## Dependencies

```bash
npm install @dnd-kit/core uuid react-icons
```

---

## Usage

### Adding a Task
1. Click **+ Add New Task** button
2. Fill in the title, description, priority, status, deadline
3. Type a tag and press **Enter** to add it
4. Click **Add Task**

### Editing a Task
- Click the Edit icon on any task card to open the edit modal
- Update the fields and click **Update**

### Deleting a Task
- Click the 🗑 icon on any task card to delete it

### Moving a Task
- **Drag** a task card and **drop** it into another column
- The task status updates automatically and is saved to localStorage

---

## Data Persistence

All tasks are saved to the browser's `localStorage` automatically. Data is preserved even after closing or refreshing the page. No external database or API is required.

---

## Screenshots

### Board View
> Three columns — To Do, In Progress, Done — with color-coded task cards showing priority, tags, and deadlines.

### Add Task Modal
> Clean modal with fields for title, description, priority, status, deadline, and tags with pill-style input.

---

## Future Improvements

- Search and filter tasks by title or tag
- Dark mode toggle
- Task due date notifications
- Multiple board support
- User authentication

---

## Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)

---

## License

This project is open source and available under the [MIT License](LICENSE).