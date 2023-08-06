# Blog Application

![Blog Application](https://github.com/Anjali2104/Blog-Application/blob/master/client/public/blog.png)

This is a Blog Application that allows users to create, read, update, and delete blog posts. It's built using the MERN (MongoDB, Express, React, Node.js) stack and incorporates user authentication and authorization.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Demo

You can see a live demo of the application at [Blog Application Demo](https://blog-application-demo.netlify.app/).

## Features

- User Registration and Login: Users can create accounts and log in securely using JWT authentication.

- Create Blog Posts: Authenticated users can create new blog posts with a title, content, and optional image.

- Update and Delete Blog Posts: Users can edit or delete the posts they have created.

- View All Blog Posts: Users can see a list of all blog posts created by various users.

- Category Filtering: Users can filter blog posts by category.

- User Profile: Users can view and update their profile information.


## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com/try/download/community)

## Getting Started

To get the application up and running, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Anjali2104/Blog-Application.git
```

2. Change into the project directory:

```
cd Blog-Application
```

## Installation

1. Install server dependencies:

```
cd server
npm install
```

2. Install client dependencies:

```
cd ../client
npm install
```

## Usage

1. Set up environment variables:

   Create a `.env` file in the `server` directory with the following variables:

   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_for_jwt
   ```

2. Start the server:

```
cd server
npm start
```

3. Start the client (in a separate terminal):

```
cd client
npm start
```

The client will open in your default web browser at `http://localhost:3000/`.

## API Routes

The server has the following API routes:

- POST `/api/auth/register`: Register a new user.
- POST `/api/auth/login`: Login existing users.
- POST `/api/posts`: Create a new blog post.
- GET `/api/posts`: Get all blog posts.
- GET `/api/posts/:id`: Get a blog post by ID.
- PUT `/api/posts/:id`: Update a blog post by ID.
- DELETE `/api/posts/:id`: Delete a blog post by ID.
- GET `/api/categories`: Get all categories.
- GET `/api/users/:id`: Get a user by ID.
- PUT `/api/users/:id`: Update a user by ID.

## Technologies Used

- MongoDB: NoSQL database used to store user, post, and category data.
- Express: Backend framework for handling HTTP requests and routing.
- React: Frontend library for building user interfaces.
- Node.js: JavaScript runtime for executing server-side code.
- JWT: JSON Web Tokens for user authentication.

## Contributing

If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

Special thanks to the project owner [Anjali2104](https://github.com/Anjali2104) for developing this application and making it open-source.
