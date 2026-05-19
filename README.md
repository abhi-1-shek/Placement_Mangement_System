# Placement_Mangement_System

A full-stack placement management system for educational institutions to manage students, companies, and placement records. Built with Spring Boot (Backend) and React (Frontend).

🚀 Features

  * Dashboard - Overview of key metrics and statistics

  * Student Management - Add, edit, delete, and view student details

  * Company Management - Manage recruiting companies and their information

  * Placement Tracking - Track placements with student-company associations, package details, and status

🛠️ Tech Stack
Backend
* Java 17

* Spring Boot - REST API framework

* Spring Data JPA - Database operations

* MySQL - Relational database

* Lombok - Boilerplate code reduction

Frontend
* React 18 - UI library

* React Router DOM - Client-side routing

* CSS - Custom styling

📋 Prerequisites
* Node.js (v16+)

* Java 17

* MySQL Server

* Maven

🔧 Installation & Setup
1. Clone the Repository
   
       git clone https://github.com/yourusername/placement-management-system.git
       cd placement-management-system
2. Backend Setup (Spring Boot)

       cd backend

Configure Database: Edit src/main/resources/application.properties

     spring.datasource.url=jdbc:mysql://localhost:3306/pms_db
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
     spring.jpa.hibernate.ddl-auto=update

Run the Backend:

    ./mvnw spring-boot:run   # Linux/Mac
     mvnw.cmd spring-boot:run  # Windows

The backend will start at http://localhost:8080

3. Frontend Setup (React)

       cd frontend
       npm install
       npm run dev
   
 The frontend will start at http://localhost:5173

📁 Project Structure

    placement-management-system/
    ├── backend/
    │   └── src/main/java/com/pms/
    │       ├── controller/      # REST Controllers
    │       ├── model/           # Entity classes
    │       ├── repository/      # JPA Repositories
    │       └── service/         # Business logic
    │
    └── frontend/
    └── src/
        ├── components/      # React components
        │   ├── Header.jsx
        │   ├── HorizontalNav.jsx
        │   ├── Layout.jsx
        │   ├── StudentCard.jsx
        │   ├── StudentForm.jsx
        │   ├── StudentList.jsx
        │   ├── CompanyCard.jsx
        │   ├── CompanyForm.jsx
        │   ├── CompanyList.jsx
        │   ├── PlacementCard.jsx
        │   ├── PlacementForm.jsx
        │   └── PlacementList.jsx
    └── pages/           # Page components

🔌 API Endpoints

Here is the API documentation you provided, reformatted into a clear table form.

### 🔌 API Endpoints

| Entity | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Students** | GET | `/api/students` | Get all students |
| | POST | `/api/students` | Create student |
| | PUT | `/api/students/{id}` | Update student |
| | DELETE | `/api/students/{id}` | Delete student |
| **Companies** | GET | `/api/companies` | Get all companies |
| | POST | `/api/companies` | Create company |
| | PUT | `/api/companies/{id}` | Update company |
| | DELETE | `/api/companies/{id}` | Delete company |
| **Placements** | GET | `/api/placements` | Get all placements |
| | POST | `/api/placements` | Create placement |
| | PUT | `/api/placements/{id}` | Update placement |
| | DELETE | `/api/placements/{id}` | Delete placement |

📊 Database Schema

Student Table
* id (PK) - Long

* name - String (required)

* email - String (unique, required)

* phone - String

* course - String

* percentage - Double

* graduation_year - Integer

Company Table

* id (PK) - Long

* name - String (required)

* industry - String

* location - String

* email - String

* phone - String

Placement Table

* id (PK) - Long

* student_id (FK) - Long

* company_id (FK) - Long

* position - String

* package_amount - Double

* placement_date - Date

* status - String (Pending/Confirmed/Completed/Cancelled)

🎯 Usage

Add Students - Navigate to Candidates → Add Student

Add Companies - Navigate to Companies → Add Company

Create Placement - Navigate to Placements → Add Placement

View Dashboard - See placement statistics and recent activity

🤝 Contributing
* Fork the repository

* Create your feature branch (git checkout -b feature/amazing-feature)

* Commit your changes (git commit -m 'Add some amazing feature')

* Push to the branch (git push origin feature/amazing-feature)

* Open a Pull Request

📝 License

This project is licensed under the MIT License.

👨‍💻 Author

HireHub Team - Placement Management System
