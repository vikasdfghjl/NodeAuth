# Node.js App with MongoDB and jwt Auth

This is a simple node.js application that uses express, mongodb and jsonwebtoken for authentication.

## Getting Started

- Appropriate Flow for User Signup & User Login with JWT Authentication
- Node.js Express Architecture with CORS, Authenticaton & Authorization middlewares, Mongoose ODM
- Way to configure Express routes to work with JWT
- How to define Mongoose Models for Authentication and Authorization
- How to use Mongoose to interact with MongoDB Database

**We will build a Node.js Express application in that:**

User can signup new account, or login with username & password.
By role (admin, moderator, user), the User has access to protected resources or not
These are APIs that we need to provide:

| Methods | Urls             | Actions                    |
|---------|------------------|----------------------------|
| POST    | /api/auth/signup | signup new account         |
| POST    | /api/auth/signin | login an account           |
| GET     | /api/test/all    | retrieve public content    |
| GET     | /api/test/user   | access User’s content      |
| GET     | /api/test/mod    | access Moderator’s content |
| GET     | /api/test/admin  | access Admin’s content     |

> A legal JWT must be added to HTTP x-access-token Header if Client accesses protected resources

## Technology

mongoose 6.11.2

- "bcryptjs": 2.4.3,
- "colors": 1.4.0,
- "cookie-parser": 1.4.4,
- "cors": 2.8.5,
- "debug": 2.6.9,
- "express": 4.18.3,
- "express-async-handler": 1.2.0,
- "http-errors": 1.6.3,
- "jade": 0.29.0,
- "jsonwebtoken": 9.0.2,
- "jstransformer": 1.0.0,
- "mongodb": 6.4.0,
- "mongoose": 6.10.0,
- "morgan": 1.9.1,
- "pug": 3.0.2,
- "uuid": 9.0.1
