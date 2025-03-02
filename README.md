﻿# assignman-backend
# Authentication API

This is a Node.js authentication API with **JWT authentication**, **bcrypt password hashing**. It includes:

✅ User **Signup & Login**
✅ JWT-based authentication
✅ Secure **bcrypt password hashing**
✅ API routes for authentication

## 🚀 Installation & Setup


### **2️⃣ Install Dependencies**
```sh
npm install
```
git clone the repository and navigate to the project directory


### **4️⃣ Start the Server**
```sh
npm start
```
The API will run on `http://localhost:5000`.

---

### **4️⃣ Start the Frontend**
```sh
npm run dev
```
The frontend will run on `http://localhost:5173`.

---

## 📌 API Endpoints

### **1️⃣ User Signup**
**Endpoint:** `POST /api/auth/signup`
```json
{
  "fullName": "Shivam Mishra",
  "username": "mishivam",
  "email": "shivam603@gmail.com",
  "password": "Shivam@198",
  "confirmPassword": "Shivam@198"
}
```
✅ Returns a JWT token on success.

### **2️⃣ User Login**
**Endpoint:** `POST /api/auth/login`
```json
{
  "email": "shivam603@gmail.com",
  "password": "Shivam@198"
}
```


## 🛠 Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** (Mongoose ODM)
- **JWT** (JSON Web Token)
- **Bcrypt.js** (Password Hashing)

---

## 🔥 Run in Development Mode
For auto-restart on file changes, use **nodemon**:
```sh
npm install -g nodemon
nodemon server.js
#
