# E-Commerce Website Backend

This project serves as the robust backend foundation for an e-commerce website. It provides the essential API endpoints and data management capabilities to power a fully functional online store.

## Key Features

- **RESTful API:** Exposes well-structured endpoints for handling product information, user authentication, shopping cart management, orders, and more.
- **Data Persistence:** Utilizes MongoDB, a NoSQL database, for flexible and scalable storage of product catalogs, user data, and order history.
- **User Authentication:** Implements secure user registration, login, and session management using JSON Web Tokens (JWT) for authorization.
- **Error Handling:** Includes middleware for graceful error handling and providing informative responses.

## Technologies Used

- **Node.js:** JavaScript runtime for building fast and efficient server-side applications.
- **Express.js:** Minimalist web framework for creating APIs and handling HTTP requests.
- **MongoDB:** NoSQL database known for its flexibility and ability to handle unstructured data.
- **Mongoose:** Object Data Modeling (ODM) library for Node.js that simplifies interaction with MongoDB.
- **bcrypt:** Library for securely hashing and comparing passwords.
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens (JWT) for authentication.
- **dotenv:** Loads environment variables from a `.env` file.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **express-async-errors:** Simplifies error handling in asynchronous Express routes.

## Project Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Terminal239/ecommerce-backend.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configuration:**
   - Create a `.env` file in the project root and add the following:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

## Starting the Server

- **Development Mode:**

  ```bash
  npm run dev
  ```

  This starts the server using `nodemon`, which will automatically restart the server on file changes.

- **Production Mode:**
  ```bash
  npm start
  ```
