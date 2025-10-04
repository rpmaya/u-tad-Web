# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **u-tad Web Development course repository** containing educational exercises and projects demonstrating various web technologies. The repository is organized by technology/topic, with exercises progressing from basic HTML/CSS/JavaScript to modern frameworks like React and Next.js.

## Project Structure

The repository contains multiple independent projects organized by technology:

- **intro-html/** - Basic HTML/CSS exercises
- **intro-js/** - Vanilla JavaScript fundamentals and exercises
- **src/** - JavaScript exercises including date handling, galleries, and DOM manipulation
- **jquery/** - jQuery exercises including calculators, multi-language examples
- **ajax/** - AJAX examples with Flask backends
- **Bootstrap/** - Bootstrap 5.3 exercises and responsive design examples
- **react/** - React applications (ejercicio1, click-counter, mi-app)
- **next/** - Next.js projects (myapp, login)
- **test/** - Test React application (miapp)
- **TODOs/** - Todo list application
- **ranas/** - "Ranas" (frogs) practice exercise

## Technology Stack

### Frontend Technologies
- **Vanilla JavaScript**: ES6+ syntax, DOM manipulation, event handling
- **jQuery**: DOM manipulation, AJAX requests, event handling
- **React**: Component-based architecture using Create React App (react-scripts)
- **Next.js**: App Router architecture with Server/Client components
- **Bootstrap**: Version 5.3 for responsive layouts
- **Tailwind CSS**: Used in Next.js projects

### Backend Technologies
- **Flask**: Python web framework for AJAX examples and some Bootstrap exercises
- **Flask-CORS**: CORS handling for frontend-backend communication

## Common Commands

### React Projects (react/ejercicio1, react/click-counter, react/mi-app, test/miapp)
```bash
cd react/ejercicio1  # or any React project
npm start            # Development server (port 3000)
npm run build        # Production build
npm test             # Run tests
```

### Next.js Projects (next/myapp, next/login)
```bash
cd next/myapp        # or next/login
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Flask Projects (Bootstrap/ejercicio1, Bootstrap/ejercicio2, ajax/*)
```bash
cd Bootstrap/ejercicio1  # or any Flask project
python app.py            # Start Flask development server (port 5000)
# Flask apps typically use templates/ for HTML and static/ for assets
```

### Bootstrap Projects with Gulp (Bootstrap/ejercicio1, Bootstrap/startbootstrap-freelancer-gh-pages)
```bash
cd Bootstrap/ejercicio1
npm install
gulp                 # Run Gulp tasks (if applicable)
```

## Architecture Notes

### Next.js Projects Structure (next/myapp)
- Uses **App Router** (app directory)
- **app/page.js** - Home page component
- **app/layout.js** - Root layout wrapping all pages
- **app/about/**, **app/posts/**, **app/users/** - Route-based directories
- **app/api/** - API routes
- **components/** - Reusable components (Navbar, PostCard)
- **app/data/** - Data files/utilities
- Tailwind CSS configured with postcss.config.js and tailwind.config.js

### React Projects Structure (react/ejercicio1)
- Uses **Create React App** with react-scripts
- Component-based architecture
- Example: ejercicio1 has Table, THead, TBody components for data display
- Standard CRA file structure with src/ directory

### Flask Projects
- **app.py** - Main Flask application entry point
- **templates/** - Jinja2 HTML templates
- **static/** - CSS, JavaScript, images, vendor libraries
- Uses `render_template()` for serving HTML
- AJAX endpoints return JSON via `jsonify()`

### Bootstrap Projects
- Use Bootstrap 5.3 grid system (container, rows, columns)
- Breakpoints for responsive design (sm, md, lg, xl, xxl)
- Vendor libraries typically in static/vendor/ or vendor/
- Some projects use Gulp for build tasks

### Vanilla JavaScript Projects
- HTML files with inline or linked JavaScript
- DOM manipulation using querySelector, addEventListener
- Event-driven architecture
- Examples include image galleries, date pickers, form validation

## Important Patterns

### Flask AJAX Pattern
Flask backends typically:
1. Serve HTML via `render_template()`
2. Handle AJAX POST requests with `request.form[]`
3. Return JSON responses with `jsonify()`
4. Use `flask_cors.CORS` for cross-origin requests

### Next.js Component Pattern
- Server Components by default (no "use client" directive)
- Client Components require "use client" directive at top
- Fetch data in Server Components directly in component body
- Use app/api/ routes for backend API endpoints

### React Component Pattern
- Functional components with hooks (useState, useEffect)
- Props drilling for data passing
- Component composition (Table -> THead + TBody)

## Static File Hosting
Multiple projects use static hosting patterns:
- Bootstrap projects: static/vendor/ for jQuery, Bootstrap libraries
- Templates stored in templates/ directory for Flask projects
- Public assets in public/ for React/Next.js projects

## Course Exercise Files
Many standalone HTML files demonstrate specific concepts (e.g., ejercicio.html, tracks.js). These are typically self-contained examples meant for learning specific techniques.
