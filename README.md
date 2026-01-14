# Personal Portfolio Website

A modern, full-stack personal developer portfolio built with the **MERN Stack** (MongoDB, Express, React, Node.js). This project showcases my skills, projects, and provides a way for potential employers or clients to contact me directly.

**Live Demo:** https://future-fs-01-qbtum3vqu-honnete-1s-projects.vercel.app/
## Features

-   **Dynamic UI**: Built with React and Framer Motion for smooth animations and a premium feel.
-   **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
-   **Project Showcase**: Dynamically fetches and displays projects from a MongoDB database.
-   **contact Form**: Fully functional contact form that saves messages to the database.
-   **Fast & SEO Friendly**: Powered by Vite for lightning-fast development and performance.

---

## Tech Stack

### Frontend
-   **React (Vite)**: Fast component-based UI development.
-   **Framer Motion**: Advanced animations and transitions.
-   **React Router DOM**: Client-side routing.
-   **CSS3**: Custom modern styling.

### Backend
-   **Node.js & Express**: Robust REST API architecture.
-   **MongoDB & Mongoose**: NoSQL database for flexible data modeling.
-   **CORS**: Secure cross-origin resource sharing.
-   **Dotenv**: Environment variable management.

### Deployment
-   **Frontend & Backend**: Deployed on [Vercel](https://vercel.com).
-   **Database**: Hosted on [MongoDB Atlas](https://www.mongodb.com/atlas).

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
-   Node.js (v14 or higher)
-   npm (v6 or higher)
-   MongoDB URI (Local or Atlas)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/honnete-1/FUTURE_FS_01.git
    cd FUTURE_FS_01
    ```

2.  **Install Frontend Dependencies**
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies**
    ```bash
    cd server
    npm install
    ```

4.  **Configure Environment Variables**
    Create a `.env` file in the `server/` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

5.  **Seed the Database (Optional)**
    To populate the database with initial project data:
    ```bash
    cd server
    node seed.js
    ```

### Running the App

1.  **Start the Backend Server**
    ```bash
    cd server
    npm run dev
    ```
    *The server will run on `http://localhost:5000`*

2.  **Start the Frontend** (in a new terminal)
    ```bash
    # From root directory
    npm run dev
    ```
    *The app will run on `http://localhost:5173`*

---

## API Documentation

### Projects
-   **GET** `/api/projects`: Fetch all showcased projects.

### Contact
-   **POST** `/api/contact`: Submit a new contact message.
    -   **Body**: `{ "name": "John Doe", "email": "john@example.com", "message": "Hello!" }`

---

## Contact

**Honnête** - [GitHub](https://github.com/honnete-1)

---
*Created as part of the Future Intern Full Stack Web Development Internship (Task 1).*
