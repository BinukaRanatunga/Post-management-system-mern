# post-management-system

Functionalities:

1.User Registration

Users can create a new account by providing their first name, last name, email, and password.
Passwords are securely hashed before being stored in the database.

2.User Login

Registered users can log in using their email and password.
Successful login returns a JWT (JSON Web Token) for authentication.

3.Authentication

JWTs are used to secure API endpoints, ensuring only authenticated users can access certain functionalities.

4.Post Management

Create: Authenticated users can create new posts.
Read: Users can view a list of posts.
Update: Users can update their own posts.
Delete: Users can delete their own posts.

Key Components:

1.Frontend

React: Handles the user interface and interactions.
MDBReact: Provides UI components for a modern and responsive design.
React Router: Manages navigation between different pages like login, registration, and home.

2.Backend

Node.js: Server-side runtime environment.
Express: Web framework for building the API and handling requests.
MongoDB: NoSQL database for storing user and post data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

Login page
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/8e1833da-d6e0-487d-86e9-9649ceaf0a9a)

Register page
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/b586b375-5943-4580-b664-9c1edb35da26)

Home Page
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/f89430b7-46be-4156-9387-5e3f0bb18d9b)

Create post page
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/419adad5-d973-4ab1-8b58-3c61917a05c7)

Update Post
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/bc33835d-03cf-4297-9a0f-ef03e0f9109b)

Search function
![image](https://github.com/BinukaRanatunga/post-management-system/assets/120770401/b0125cc1-a82f-4554-94d7-ecb8c6c47bc1)





