# Restaurant Management REST API

A RESTful API built with **Node.js, Express.js, and MongoDB** for managing restaurant waiters and customer orders. The project implements secure JWT authentication, protected routes, and complete CRUD functionality.

## Task Requirements

| Requirement                           |       Status       |
| ------------------------------------- | :----------------: |
| GitHub repository with REST API       |          ✅         |
| CRUD REST API using Express           |          ✅         |
| Mongoose Schemas & Models             |          ✅         |
| JWT Authentication (Register & Login) |          ✅         |
| Authentication Middleware             |          ✅         |
| Error Handling Middleware             |          ✅         |
| At Least Two Resources                | ✅ Waiters & Orders |

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* Thunder Client

---

## API Endpoints

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`

### Waiters

* `POST /api/waiters`
* `GET /api/waiters`
* `GET /api/waiters/:id`
* `PUT /api/waiters/:id`
* `DELETE /api/waiters/:id`

### Orders

* `POST /api/orders`
* `GET /api/orders`
* `GET /api/orders/:id`
* `PUT /api/orders/:id`
* `DELETE /api/orders/:id`

---



## Testing

All API endpoints were tested successfully using **Thunder Client**.

---

## Screenshots

* Server Running
![Server Running](./screenshots/1.png)
* User Registration
![User Registration](./screenshots/2.png)
* User Login
![User Login](./screenshots/4.png)
* Create Waiter
![Create Waiter](./screenshots/5.png)
* Get All Waiters
![All Waiter](./screenshots/6.png)
* Update Waiter
![Update Waiter](./screenshots/8.png)
* Delete Waiter
![delete waiter](./screenshots/13.png)
* Create Order
![create Order](./screenshots/9.png)
* Get All Orders
![All Order](./screenshots/10.png)
* Update Order
![Update Order](./screenshots/11.png)
* Delete Order
![Delete Order](./screenshots/12.png)
* Unauthorized Request
![Unauthorized Request](./screenshots/14.png)

---

## Learning Outcomes

This project strengthened my understanding of REST API development with Express.js, MongoDB using Mongoose, JWT authentication, middleware, CRUD operations, and API testing with Thunder Client.
