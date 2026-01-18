README


#  Kanban Board – React Project

This is a *Kanban Board application* built using *React, **Context API, and **dnd-kit*.  
It allows users to *add, edit, delete, and drag tasks* between columns like *To Do, **In Progress, and **Done*.

---

##  Features

-  Add new task using modal
-  Edit existing task
-  Delete task
-  Priority based color (Low / Medium / High)
-  Drag and Drop tasks between columns
-  Data saved using LocalStorage
-  Smooth UI using Tailwind CSS

---

##  Technologies Used

- React JS
- Context API
- dnd-kit (Drag and Drop)
- Tailwind CSS
- UUID
- LocalStorage

---

##  How It Works

1. Click *Add New Task*
2. Modal opens with:
   - Title
   - Description
   - Priority
3. Click *Add* → Task appears in *To Do* column
4. Drag task between columns
5. Click  to edit task
6. Click  to delete task

---

##  Columns

- *To Do*
- *In Progress*
- *Done*

Each task has a status field which decides the column.

---

##  Installation & Run

npm install
npm run dev