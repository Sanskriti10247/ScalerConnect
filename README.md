
ScalerConnect
ScalerConnect is a student-centric networking platform built using React. It allows students to raise issues, interact with college representatives, and receive updates on campus life, academics, events, and more.

🌱 Project Purpose
To build a centralized platform for Scaler students to voice concerns, seek solutions, and stay updated with announcements and event notifications — fostering better communication and transparency.

⚙️ Tech Stack
Frontend: React.js

Routing: React Router DOM

State Management: Context API

Styling: Tailwind CSS

Version Control: Git & GitHub

Mock APIs (for now)

📁 Folder Structure (as of Day 4)
pgsql
Copy
Edit
ScalerConnect/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico (replaced with growth.png)
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── FormInput.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── Context/
│   │   │   ├── AuthContext.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   ├── index.css
│   ├── tailwind.config.js
│   ├── .gitignore
│   ├── package.json
✅ Day 1: Project Setup
🔹 Initialized React project using create-react-app.

🔹 Set up Tailwind CSS for styling.

🔹 Cleaned up default files and structure.

🔹 Added Components and Pages folders.

🔹 Pushed initial codebase to GitHub repo.

✅ Day 2: Routing & Base Pages
🔹 Installed React Router DOM.

🔹 Created routes using <BrowserRouter> and <Routes>:

/home → Home Page

/feed → Feed Page

/login → Login Page

/register → Register Page

🔹 Created basic skeleton pages for each route.

🔹 Built a Navbar with links to all main pages.

🔹 Updated default favicon (React) with custom image growth.png.

✅ Day 3: Forms & Inputs
🔹 Built Login and Register pages with controlled input fields using useState.

🔹 Created reusable <FormInput /> component for text/email/password inputs.

🔹 Used Tailwind for simple responsive form styling.

🔹 Added mock handleSubmit logic for now (console log on submit).

✅ Day 4: Authentication Setup
🔹 Created AuthContext.jsx with React's Context API:

Maintains global user state (user)

login(userData) to set user on login

logout() to remove user on logout

Exposed via custom useAuth() hook

🔹 Wrapped App in <AuthProvider /> inside index.js for global access.

🔹 Connected login/register forms to login() method in context.

🔹 Redirected / to /home using Navigate.



## 🖼️ Project UI Preview (Current Look)

### 📸 Current UI Preview

Here's how the app currently looks (basic layout with functional pages and forms):

![image](https://github.com/user-attachments/assets/bca45d1b-9e0e-4d40-8a18-c8df1e129a51)

We plan to enhance this look using Tailwind CSS and optional Scaler branding styles (color palette, gradients, fonts, etc.).


This screenshot shows the current functional layout of **ScalerConnect**, where the core routes (Home, Feed, Login, Register) and navigation are working as expected. The form inputs and page structure are in place using reusable components and Context API for global authentication state.

While the design is currently minimal and utility-focused, **Tailwind CSS** has been set up and ready to be fully utilized. In upcoming stages, I will enhance the visual experience using:

- Scaler-inspired **colors**, **fonts**, and **gradients**
- A cleaner **navbar**, refined **buttons**, and responsive **layout**
- A polished **feed** and **form experience** with interactive feedback and animations

This transformation will align the project with Scaler's visual identity and elevate its UI/UX quality.

