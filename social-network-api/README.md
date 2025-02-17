# 17 NoSQL: Social Network API

## Description

This project is a social network API built using Node.js, Express.js, and MongoDB. It allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The API is designed to handle large amounts of unstructured data efficiently, leveraging the flexibility of a NoSQL database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd social-network-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   Ensure you have MongoDB installed and running on your machine. You can follow the [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) for assistance.

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Test the API**:
   Use a tool like Insomnia or Postman to test the API endpoints. The following routes are available:

   - **Users**:
     - `GET /api/users` - Retrieve all users
     - `GET /api/users/:userId` - Retrieve a single user by ID
     - `POST /api/users` - Create a new user
     - `PUT /api/users/:userId` - Update a user by ID
     - `DELETE /api/users/:userId` - Delete a user by ID

   - **Thoughts**:
     - `GET /api/thoughts` - Retrieve all thoughts
     - `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID
     - `POST /api/thoughts` - Create a new thought
     - `PUT /api/thoughts/:thoughtId` - Update a thought by ID
     - `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID

   - **Reactions**:
     - `POST /api/thoughts/:thoughtId/reactions` - Create a reaction to a thought
     - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction by ID

## Walkthrough Video

A walkthrough video demonstrating the functionality of the API will be provided. Please refer to the README for the link once available.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.