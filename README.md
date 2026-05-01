# Sheshank Singh - Portfolio

A modern, responsive, and minimal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Technologies Used
- **React** (with Vite)
- **Tailwind CSS** (for styling)
- **Framer Motion** (for smooth scroll animations)
- **Lucide React** (for icons)

## 🛠️ Local Development Setup

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment Guide

This project is a static site (no backend required) and can be easily deployed to platforms like GitHub Pages or Vercel.

### Option 1: Deploy to Vercel (Recommended)
Vercel is the easiest way to deploy Vite React apps.
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New" > "Project"** and import your repository.
4. Vercel will automatically detect that it's a Vite project. The framework preset should be `Vite`.
5. Click **Deploy**. Your site will be live in minutes.

### Option 2: Deploy to GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update your `vite.config.js` to include the `base` URL:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Replace with your actual repo name
   })
   ```
3. Update `package.json` to include deployment scripts:
   ```json
   "scripts": {
     // ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Push your code to GitHub.
5. Run the deployment command:
   ```bash
   npm run deploy
   ```
6. In your GitHub repository settings, go to **Pages** and ensure the source is set to the `gh-pages` branch.

## 🎨 Customization
- **Data**: All personal data (Experience, Projects, Skills, etc.) is located in `src/data/constants.js`. Edit this file to update your content without touching the UI code.
- **Theme**: Colors are configured in `tailwind.config.js` and `src/index.css`.
