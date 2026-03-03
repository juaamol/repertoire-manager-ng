# Repertoire Manager (Angular)

A single‑page application for musicians to track, search, and organize their repertoire.

---

## 📌 Overview

The app provides a simple UI where a user can:

- **Log in** using a custom credentials form (placeholder logic).
- **Browse a repertoire shelf** containing works they are studying or performing.
- **Search for works** by title/author with live filtering.
- **Add, edit, and remove entries** to keep the list up to date.

All views are implemented as standalone components and styled with SCSS.

---

## 🧱 Architecture & Structure

- **Framework:** Angular 21.2.0 (CLI generated)
- **Styling:** SCSS files scoped to components
- **State:** Simple component state; no global store
- **Routing:** Defined in `app.routes.ts` with lazy-loaded pages
- **Key folders:**
  - `components/` – reusable UI pieces (navbar, page-title, input controls)
  - `pages/` – top‑level views (login, repertoire-shelf, work-search)
  - `pipes/` – utility transformations (e.g. string‑to‑color)

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`.
3. **Build for production**
   ```bash
   ng build --prod
   ```
   Artifacts will be in the `dist/` directory.

---

## 📝 License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.

> This repository is primarily for myself, but the GPL v3.0 ensures that
> any derivative works must also be open source under the same license.
