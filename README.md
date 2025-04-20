ScalerConnect

![Mybackground image](https://github.com/user-attachments/assets/489ca3db-6772-401a-a5b8-682329ce9ec2)


ScalerConnect is a student-centric networking platform built using React. It allows students to raise issues, interact with college representatives, and receive updates on campus life, academics, events, and more — all in one place.

🌱 Project Purpose
To build a centralized platform for Scaler students to voice concerns, seek solutions, and stay updated with announcements and event notifications — fostering better communication and transparency.

⚙️ Tech Stack
Frontend: React.js (Functional Components + Hooks)

Routing: React Router DOM

State Management: Context API

Styling: Tailwind CSS

Version Control: Git & GitHub

Mock APIs: For simulating user and form data

✅ Day-by-Day Progress
✅ Day 1: Project Setup

🔹 Initialized React project using create-react-app

🔹 Set up Tailwind CSS for styling

🔹 Cleaned default files and folder structure

🔹 Added Components and Pages folders

🔹 Pushed the initial codebase to GitHub

✅ Day 2: Routing & Base Pages

🔹 Installed react-router-dom

🔹 Created routes using BrowserRouter, Routes, and Route:

/home → Home Page

/feed → Feed Page

/login → Login Page

/register → Register Page

🔹 Built skeleton page components

🔹 Created a Navbar with links to all routes

🔹 Replaced default favicon with custom growth.png image

✅ Day 3: Forms & Inputs
🔹 Built Login and Register pages using controlled components (useState)

🔹 Created a reusable input field component for all form fields

🔹 Used Tailwind CSS for clean, responsive form styling

🔹 Implemented temporary form logic with console logging on submission


✅ Day 4: Authentication Setup
🔹 Created AuthContext.jsx using React’s Context API:

Stores global user state

login(userData) to simulate logging in

logout() to clear the session

🔹 Provided AuthContext globally by wrapping <App /> inside index.js

🔹 Connected forms to login() logic from context

🔹 Redirected / to /home using Navigate

🖼️ Project UI Preview (Previous Look)

📸  Previous UI Preview
Here's how the app Previously looked (basic layout with functional pages and forms):

<img width="1466" alt="scalerconnect-ui-preview" src="https://github.com/user-attachments/assets/0bc4c14a-b1d6-477d-8946-08ca637d51dc" />


Register page: <img width="223" alt="Screenshot 2025-04-07 at 4 04 11 PM" src="https://github.com/user-attachments/assets/95056c80-9b86-44ff-851e-12367ce16509" />

Login page: <img width="254" alt="Screenshot 2025-04-07 at 4 03 38 PM" src="https://github.com/user-attachments/assets/7d6d3f85-0313-461c-b5a9-b2b9481e925d" />



✅ Final Steps
🔹 Styled the Navbar, Login, and Register pages with a polished, professional design using Tailwind CSS

🔹 Integrated Scaler branding elements (logo, color palette) into the design

🔹 Enhanced form input components with custom styling for consistency and clarity

🔹 Ensured the design is responsive and mobile-friendly, providing a seamless user experience

🔹 Added placeholders for the Feed page and Home page content

🔹 Integrated MockAPI.io to simulate real-world API functionality for login, registration, and query submission

🔹 Connected form inputs (login and register) to mock API responses for dynamic data handling

🔹 Fine-tuned UI components for consistent branding and improved design quality

🔹 Completed final testing to ensure all routes, forms, and components function as expected


🖼️ Current UI Look & Features-

Desktop & Mobile Responsiveness: 
ScalerConnect is fully responsive, ensuring an optimal experience across all devices. The UI adapts seamlessly from desktop to mobile views, offering:

Desktop View: A clean and intuitive layout with a fixed Navbar and neatly organized pages (Home, About, Feed, Contacts, Login).
<img width="1470" alt="Screenshot 2025-04-19 at 4 12 34 PM" src="https://github.com/user-attachments/assets/fe759950-f653-468b-9520-b3dc2be423c4" />


Mobile View: A responsive design that adjusts all elements for easy navigation on smaller screens. 
![WhatsApp Image 2025-04-19 at 15 51 17](https://github.com/user-attachments/assets/47562931-9f83-4127-b08c-7ada2f343ed8)


Core Features:
Home Page: Offers a welcoming introduction with illustrations and relevant content for Scaler students.

About Page: Provides information about ScalerConnect’s purpose and how it benefits students, ensuring transparency and ease of use.
<img width="1470" alt="Screenshot 2025-04-19 at 4 14 09 PM" src="https://github.com/user-attachments/assets/8161f760-26b4-49a7-b83a-58103a68792e" />

Login Page: A simple form that allows students to log in/register manually or using google, with a clean and responsive design.
<img width="508" alt="Screenshot 2025-04-19 at 4 14 41 PM" src="https://github.com/user-attachments/assets/db7928c7-35ed-4b0a-86b5-31ee5b70af16" />

Feed Page: Displays mock posts for student interactions, updates on various issues, events, and campus life.
<img width="1470" alt="Screenshot 2025-04-19 at 4 25 42 PM" src="https://github.com/user-attachments/assets/63a81fa2-9be3-4f84-9c78-cbe9c7875de2" />

Contacts Page: Provides contact information for students to reach out to the appropriate college representatives or event coordinators.
<img width="1470" alt="Screenshot 2025-04-19 at 4 26 28 PM" src="https://github.com/user-attachments/assets/6359f168-4e49-4a2e-bec5-58f4969b8c6d" />
<img width="1470" alt="Screenshot 2025-04-19 at 4 26 48 PM" src="https://github.com/user-attachments/assets/c5bdc936-f3ed-41ac-aaf5-8accd0b879ee" />


⚙️ How to Run ScalerConnect
Follow these steps to run the app locally:

Step1: Clone the repository:

git clone https://github.com/Sanskriti10247/ScalerConnect.git

Step2: Navigate into the project directory:

cd scalerconnect

Step3: Install dependencies:

npm install

Step4: Run the app:

npm start
This will automatically open the application in your default web browser at   
Local: http://localhost:3000/ScalerConnect
On Your Network: http://10.51.0.91:3000/ScalerConnect

Reference Images: 

<img width="776" alt="Screenshot 2025-04-20 at 9 37 21 PM" src="https://github.com/user-attachments/assets/0ff9045f-8b2a-47c1-a76d-9367d6d3767d" />

<img width="776" alt="Screenshot 2025-04-20 at 9 38 02 PM" src="https://github.com/user-attachments/assets/127b0179-3978-4924-a143-0baa14e605a7" />



🔧 Tools & Services Used
React.js: Core frontend framework for building the UI with functional components and hooks.

React Router: Used for managing page navigation and routing between different views (Home, About, Feed, Contacts, Login).

Context API: Utilized for managing global state (authentication) across the app.

Tailwind CSS: Used for styling the app with a clean, responsive design.

MockAPI.io (via Google Cloud Console): Used to simulate real-world API functionality for login, registration, and data submission.


🎥 Helpful YouTube Videos for References
Here are some YouTube videos that guided me through the process:

React Router Tutorial (React Router v6):
React Router v6 - Complete Guide (2022)

React Context API Tutorial:
React Context API Tutorial

Tailwind CSS Tutorial for Beginners:
Tailwind CSS Crash Course

Building a Login System with React:
React Login Tutorial
