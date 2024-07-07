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
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/bd792d2d-8ec3-4eb8-bed0-da6d092dfbc6)


Register page
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/9bb42f7c-2c3f-4a09-8b0b-59580d748356)


Home Page
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/012d3af0-a48b-4b5e-8208-c919864e393e)


Create post page
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/80457bd3-3ead-4023-8937-dc24a7c89569)


Update Post
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/1781b1f1-a232-4c2e-bb15-17d7c548945d)


Search function
![image](https://github.com/BinukaRanatunga/Post-management-system-mern/assets/120770401/1cbd00d5-3708-485d-b56e-2f6889371e19)







