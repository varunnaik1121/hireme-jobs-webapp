# Hire Me Jobs Portal — Job Search & Company Dashboard | 2022

![Screenshot (140)](https://github.com/user-attachments/assets/b79f0f6f-cafe-4cbd-bf04-e909ec0058f0)

**Hire Me Jobs Portal** is a responsive web application designed to simplify the job search process for users while providing companies a platform to post job openings. Built with **React.js** (Hooks, Context API) and **Material UI**, the platform features Firebase Authentication for secure access and Firebase Storage for file handling. This project includes a separate admin dashboard to manage and verify company registrations.

## Features

### For Job Seekers:
- **Job Search & Filtering**: Browse through a wide variety of job postings, with advanced filters for easy search (e.g., by  role,company,salary).
- **Responsive Design**: The application is mobile-first, ensuring an optimized experience across all devices.
- **Apply for Jobs**: Users can apply for jobs directly through the platform, uploading their resumes.
- **Company Profiles**: View detailed company profiles, including their work culture and job openings.
- **Pagination**: Efficiently browse through job postings using pagination.

### For Companies:
- **Post Job Openings**: Verified companies can post job openings and manage applications received.
- **Receive Job Applications in PDF**: Applications come with user resumes in PDF format for easy review and download.
- **Firebase Storage**: Securely store and retrieve job applications and resumes using Firebase Storage.

### Admin Dashboard:
- **Company Verification**: Admins have access to a dashboard where they can verify new company registration requests.
- **Manage Companies**: Once verified, companies are allowed to post jobs, view job applications, and interact with candidates.

## Tech Stack

- **Frontend**: React.js (Hooks, Context API), Material UI
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Design**: Material UI
- **Authentication**: Firebase Auth
- **File Storage**: Firebase Storage

## Key Functionalities

### Job Seekers:
1. **Sign Up/Login**: Securely log in using Firebase Authentication
![Screenshot (343)](https://github.com/user-attachments/assets/1499a96a-ad34-45d6-8240-fcb9fd39e4f5)
2. **Browse Job Listings**: View job postings with options to filter based on criteria such as company, location, and role.
![Screenshot (304)](https://github.com/user-attachments/assets/d8fa8170-3433-40b0-b73f-f85763ecac92)
3. **Apply for Jobs**: Submit applications directly through the platform by uploading resumes, which are then securely stored.
4.![Screenshot (139)](https://github.com/user-attachments/assets/f41423e1-6cb6-45cf-a28c-f45ecefc4514)
5. **View Company Profiles**: Learn about company culture and job openings.
![Uploading Screenshot (137).png…]()
### Companies:
1. **Company Registration**: New companies can register on the platform.
![Screenshot (144)](https://github.com/user-attachments/assets/dd64ba95-635d-40f6-a903-5a961bc05f53)
2. **Post Job Openings**: After being verified by the admin, companies can post job openings and receive applications in PDF format.
![Screenshot (143)](https://github.com/user-attachments/assets/c2683603-a43d-4491-9db0-5cfa1ad15141)
3. **View Applications**: Companies can easily access job applications and download the resume of applicants in PDF format.
![Screenshot (134)](https://github.com/user-attachments/assets/2ef88721-a92c-48fd-a3b3-fc2b36132d7d)

### Admin:
1. **Verify Companies**: Admins can view and verify companies requesting to post jobs via a dedicated dashboard.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/hire-me-jobs-portal.git
