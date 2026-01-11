README


#  Kanban Board – React + dnd-kit

A simple *Kanban Board application* built using *React, **Context API, and **dnd-kit*.  
This app allows users to *add, edit, delete, and drag & drop tasks* between columns.

---

##  Features

-  Add new tasks
-  Delete tasks instantly
-  Drag & Drop tasks between columns
-  State management using Context API
-  Fast & smooth UI
-  Unique key handling (no React warnings)

---

##  Technologies Used

- React (Vite / CRA)
- Context API
- dnd-kit (@dnd-kit/core, @dnd-kit/utilities)
- JavaScript (ES6)
- CSS / Inline styles

---
## RemoveTask Reason

- Main reason for the delay in removing a task

- You are using dnd-kit.
- When a task card is draggable:

- When you click the mouse →
- dnd-kit first tries to start the drag event

- Only after that,
- the button click event gets triggered

- Because of this, there is a delay when clicking the remove (delete) button.

