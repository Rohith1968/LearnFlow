# LearnFlow - E-learning Platform

**LearnFlow** is an e-learning platform that implements a role-based access control system to differentiate between “Creator” and “Student” roles. Creators can upload and post learning videos, while students have access to view and like these videos. The platform also supports infinite threaded comments and uses AWS services for video and image storage.

## Features

- 🎥 **Role-Based Access Control**: Differentiates between “Creator” and “Student” roles. Creators can upload videos, while students can view and like them.
- 🔐 **OAuth Authentication**: Integrated multiple OAuth strategies and implemented persistent session management using Passport middleware for secure user authentication.
- 💬 **Infinite Threaded Comments**: Developed a feature for nested comments, storing them as hierarchical data with a parent-child relationship.
- ☁️ **AWS Integration**: Utilized AWS services, including S3 buckets and CDN, for efficient storage and delivery of videos and images.
- 🧑‍🏫 **User-Friendly Interface**: Simple and intuitive interface built using EJS, allowing for smooth navigation and interaction.

## Technologies Used

- 🚀 **Node.js**: Server-side runtime environment for building scalable web applications.
- 🌐 **Express**: Web application framework for Node.js, used to handle routing and middleware.
- 🗃️ **MongoDB**: NoSQL database for storing user data, videos, comments, and roles.
- 🖥️ **JavaScript**: Used for dynamic content and user interaction on both server and client sides.
- 📂 **AWS S3**: Cloud storage service used for uploading and serving videos and images.
- 🔑 **Passport.js**: Authentication middleware for Node.js that supports multiple OAuth strategies.
- 📊 **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js to interact with the database.

## Installation

### Prerequisites

- ⚡ **Node.js** (version 14 or higher)
- 🔧 **npm** (Node package manager)
- 💻 **MongoDB** (local or remote)

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/Rohith1968/LearnFlow.git
