# Professional Portfolio | Ayush Tiwari

A modern, high-performance portfolio website built with **React** and **Tailwind CSS v4**. This project features a sophisticated theme-switching architecture, responsive design, and optimized asset delivery.

## 🚀 Key Features

* **Dynamic Theme Switching**: A premium Dark/Light mode implementation using **React Context API** for global state management.
* **Tailwind CSS v4 Integration**: Leverages the latest CSS-first configuration and `@variant` directives for manual theme toggling.
* **Responsive UI**: Optimized for all devices using a "Soft Slate" color palette to reduce eye strain in light mode.
* **Optimized Asset Delivery**: Static assets (Resume/Posters) served via the **Vite public directory** for seamless external tab opening.
* **Interactive Motion**: Fluid transitions and hover effects powered by **Framer Motion**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React (Vite)** | Frontend Framework & Build Tool |
| **Tailwind CSS v4** | Modern CSS Styling & Dark Mode |
| **Context API** | Theme State Management |
| **Framer Motion** | UI Animations & Smooth Transitions |
| **EmailJS** | Client-side Contact Form Integration |

---

## 📂 Project Structure

```text
├── public/               # Static assets (PDFs, Images)
│   ├── pdf/              # Project posters and Resume
│   └── img/              # Profile and project thumbnails
├── src/
│   ├── components/       # Reusable UI components (ThemeBtn, Page)
│   ├── contexts/         # ThemeContext and custom hooks
│   ├── App.jsx           # Root component with ThemeProvider
│   └── index.css         # Global styles & Tailwind v4 directives
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite & Tailwind plugin configuration
