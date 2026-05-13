# Student Result Management System

A simple, front-end **Student Result Management System** built with **HTML, CSS, and JavaScript**. It displays a list of students with subject-wise marks, automatically calculates **Total** and **Percentage**, and lets you **search**, **add**, and **delete** student records (in-memory).

> Note: This project is currently **client-side only** (no backend/database). Data is stored in a JavaScript array inside `app.js` and resets on page refresh.

## Demo / Screens

- Open `index.html` in your browser to run the project.

## Features

- Display student records in a table
- Auto-calculates:
  - **Total** = Maths + English + Marathi + Science
  - **Percentage** = (Total / 400) × 100
- Search student by **name** (case-insensitive)
- Add a new student using a popup form (SweetAlert2)
- Delete a row from the table
- Responsive UI styling using Bootstrap + custom CSS

## Tech Stack

- **HTML**
- **CSS**
- **JavaScript (Vanilla)**
- **Bootstrap 4** (CDN)
- **SweetAlert2** (CDN)

## Project Structure

```text
.
├── index.html   # UI (table, search, buttons)
├── style.css    # Styling
├── app.js       # Logic (rendering, search, add, delete)
└── README.md
```

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/YASHASHRIKADU/Student-Result-Management-System.git
cd Student-Result-Management-System
```

### 2) Run the project

Since this is a static frontend project, you can simply open the HTML file:

- Double-click `index.html`, **or**
- Use a local server (recommended)

#### Run with VS Code Live Server (recommended)

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

#### Run with Python (optional)

```bash
# Python 3
python -m http.server 5500
```

Then open: `http://localhost:5500`

## How to Use

- **Add New Student**: Click the **Add New Student** button, enter details, and submit.
- **Search**: Type the full student name in the search box and click **Search**.
- **Delete**: Click **Delete** on any row to remove it from the table.

## Notes / Limitations

- **No persistence**: added/deleted students are not saved anywhere.
- Search currently matches **full name** only. (You can enhance it to support partial match.)
- Delete removes the row from the table; the `students` array is not re-rendered.

## Possible Enhancements

- Add **localStorage** persistence
- Support search by **roll number** and partial name match
- Add edit/update functionality
- Validate roll number uniqueness
- Add sorting (by roll number, percentage, etc.)

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

## License

No license file is currently included. If you want this project to be open-source, consider adding a `LICENSE` (e.g., MIT).
