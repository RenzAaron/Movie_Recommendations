# 🎬 Movie Recommendation Website

A **Movie Recommendation Website** built with **Django (Backend) & React (Frontend)**. This web app helps users discover new movies based on their preferences.

## 🚀 Features
- Search for movies
- Get personalized recommendations
- Minimalist UI (Black & White Theme)
- REST API with Django
- Interactive frontend with React

## 🛠 Technologies Used
### Backend:
- Python & Django
- Django REST Framework
- SQLite (for development)
- Django Models as a Pseudo Database

### Frontend:
- React & React Hooks
- Tailwind CSS
- Lucide-react (Icons)
- Axios (API requests)

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/yourusername/movie-recommendation.git
 cd movie-recommendation
```

### 2️⃣ Backend Setup (Django)
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # On Windows
# OR
source venv/bin/activate  # On Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Django backend runs at: **http://127.0.0.1:8000/**

### 3️⃣ Frontend Setup (React)
```bash
cd ../frontend
npm install
npm start
```
React frontend runs at: **http://localhost:3000/**

## 📄 API Endpoints
| Endpoint       | Method | Description                |
|--------------|--------|----------------------------|
| `/api/movies` | GET    | Fetch all recommended movies |
| `/api/search` | GET    | Search movies by query |

## 🤝 Contributing
1. **Fork** the repository
2. **Create a new branch** (`feature-branch`)
3. **Commit changes**
4. **Push to GitHub**
5. Create a **Pull Request**

## 📜 License
This project is licensed under the **MIT License**.

---
