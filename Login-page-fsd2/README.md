# Full Stack Login Page Application

## 📌 Project Overview
This project is a simple **full stack login page application** built using **React (frontend)** concepts.  
It demonstrates user authentication flow, form handling, state management, and conditional rendering.

The application allows a user to:
- Enter email and password
- Submit login credentials
- View a welcome screen after login
- Logout and return to the login page

This project is suitable for beginners learning **React fundamentals** and basic authentication logic.

---

## 🛠️ Tech Stack
**Frontend**
- React (Vite)
- JavaScript (ES6)
- HTML5
- CSS3

**Backend**
- Not connected to a real backend yet  
- Login logic is simulated on the frontend

---

## 📂 Project Structure
```
project-folder/
│
├── src/
│   ├── App.jsx
│   ├── Login.jsx
│   ├── main.jsx
│   ├── index.css
│
├── public/
├── package.json
├── README.md
```

---

## 🚀 How It Works
1. The app starts from `main.jsx`
2. `App.jsx` controls authentication state
3. If no user is logged in, `Login.jsx` is displayed
4. On successful login, the email is stored in state
5. Logout clears the user state and returns to the login form

---

## 🧩 Key Features
- Controlled form inputs
- Client-side validation
- React `useState` hook
- Conditional rendering
- Component-based architecture

---

## ⚙️ Installation & Setup
```bash
git clone https://github.com/your-username/login-page-react.git
cd login-page-react
npm install
npm run dev
```

---

## 📌 Future Improvements
- Backend integration (Node.js + Express)
- JWT authentication
- Signup page
- UI enhancements
- Database support

---

## 👤 Author
**Prithwish Pal**

---

## 📄 License
Open-source project for educational use.
