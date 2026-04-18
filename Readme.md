# 🐝 Make Bee Trip – Travel Booking Landing Page

A full-stack travel booking landing page built using **React.js** and **Node.js**, showcasing core travel services like Flights, Buses, Trains, and Hotels.

---

## 🌐 Live Demo

- **Frontend:** https://make-bee-trip-kappa.vercel.app/  
- **Backend:** https://make-bee-trip-production.up.railway.app  

---

## 🚀 Features

- ✈️ Flight Booking (API-based mock data)
- 🚌 Bus Booking (API-based mock data)
- 🚆 Train Booking (API-based mock data)
- 🏨 Hotel Listings (Manual + API simulation)
- 📱 Fully Responsive UI
- ⚡ Fast and clean user experience
- ❗ Proper error handling (frontend + backend)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- Tailwind

### Backend
- Node.js
- Express.js
- CORS & Morgan

---

## 📁 Project Structure
make-bee-trip/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── data/
│ │ ├── middleware/
│ │ └── server.js


---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/nishajha1234/make-bee-trip.git
cd make-bee-trip

### 2. Run Backend
cd backend
npm install
node src/server.js

Server runs on:
http://localhost:5000

### 2. Run Frontend
cd frontend
npm install
npm run dev

App runs on:

http://localhost:5173
🔗 API Endpoints
Endpoint	Description
/api/travel?type=flight	Get flights
/api/travel?type=bus	Get buses
/api/travel?type=train	Get trains
/api/travel?type=hotel	Get hotels

❗ Error Handling
Backend returns structured error responses
Frontend handles API failures gracefully
Validation for required query params


📌 Notes
APIs are mocked to simulate real-world behavior
Designed with scalability in mind for real API integration
👩‍💻 Author

Nisha Jha


---
