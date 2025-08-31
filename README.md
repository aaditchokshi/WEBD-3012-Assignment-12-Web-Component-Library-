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

---

## Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t ui-garden .
