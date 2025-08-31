# Chokshi Aadit - UI Garden Component Library

This project is a React-based **Component Library** built with **Storybook**.  
It demonstrates reusable UI components such as **Button, Text, Label, Table, Dropdown, RadioButton, Hero Image, and Card**.  
The library is containerized using **Docker** and served via **Nginx** on **localhost:8083**.

---

## Project Structure

- `src/components/` – Contains all components with their TypeScript, Storybook stories, tests, and styled-components.
- `public/` – Public assets.
- `Dockerfile` – For building and serving the app in a container.
- `package.json` – Node dependencies and scripts.
- `README.md` – Project documentation.

---

## Requirements

- Docker 20+
- Node.js 18+ (for local development if needed)
- npm 9+ (for local development if needed)

---

## Features & Assignment Requirements

- Fully responsive UI components
- Default and disabled states implemented for all components
- Components included:
  - **Button**
  - **Label**
  - **Text**
  - **Table**
  - **Dropdown**
  - **RadioButton**
  - **Hero Image**
  - **Card**
- Storybook stories for all components
- Tests for all components using React Testing Library
- Dockerized for easy deployment

---

## Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t chokshi_aadit_ui_garden .
