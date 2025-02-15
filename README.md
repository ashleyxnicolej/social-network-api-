# Social Network API

## **Description**  
This backend API is designed for a **social networking application**, built using **Node.js, Express.js, and MongoDB** with **Mongoose ODM**. It allows users to:  
- Share thoughts  
- React to friends' thoughts  
- Manage a friends list  

The API follows **RESTful principles** and is tested using **Insomnia**.

---

## **Features**  
✅ User authentication and management  
✅ CRUD operations for users and thoughts  
✅ Reactions (nested subdocuments) for thoughts  
✅ Friend list functionality  
✅ Proper timestamp formatting using JavaScript’s Date object  

---

## **Tech Stack**  
- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose**  
- **JavaScript**  

---

## **Installation**  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/ashleyxnicolej/social-network-api.git
Navigate to the project directory
sh
Copy
Edit
cd social-network-api
Install dependencies
sh
Copy
Edit
npm install
Start the server
sh
Copy
Edit
npm start
API Routes
User Routes (/api/users)
Method	Route	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a single user (populated thoughts & friends)
POST	/api/users	Create a new user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user (bonus: deletes associated thoughts)
Friend Routes (/api/users/:userId/friends/:friendId)
Method	Route	Description
POST	/api/users/:userId/friends/:friendId	Add a friend
DELETE	/api/users/:userId/friends/:friendId	Remove a friend
Thought Routes (/api/thoughts)
Method	Route	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:id	Get a single thought
POST	/api/thoughts	Create a new thought
PUT	/api/thoughts/:id	Update a thought
DELETE	/api/thoughts/:id	Delete a thought
Reaction Routes (/api/thoughts/:thoughtId/reactions)
Method	Route	Description
POST	/api/thoughts/:thoughtId/reactions	Add a reaction to a thought
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction
Deployment Status
🚫 This project is not deployed, as required by the challenge.
📹 Instead, a walkthrough video demonstrating all API functionality is provided.

