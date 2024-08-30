# URL_Shorting

A backend app in which user can short the url length easily.

## Deployed Link

**Backend** https://url-shortener-app-653d.onrender.com/

# Need to understand that the project is deployed on render so it will take time to start.

## Tech Stack:

- Node.js
- Express Js
- Mongo DB
- Mongoose
- bcrypt
- jsonwebtoken
- shortid/nanoid

## Setup Instructions

1. Clone the repository from GitHub.
2. Navigate to the project directory in the terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the frontend development server:

```bash
npm run server (to start on nodemon)
npm run start (to start on node)
```

6. Access the application in your web browser.

## Steps to use endpoints.

### Using Postman

1. \*Register Endpoint

- https://url-shortener-app-653d.onrender.com/users/register (using deployed link)
- http://localhost:8080/users/register (using locally)
- use this endpoint to register the new user
- use \*POST method.
- Select Body-->raw-->JSON
- In body give the body in format
- {
  "name":"your name",
  "email":"your_email@gmail.com",
  "password":"Your Password"
  }
- Use this body format and send it.
- it will give you msg new user register successfully.

2. \*Login Endpoint

- https://url-shortener-app-653d.onrender.com/users/login (using deployed link)
- http://localhost:8080/users/login (using locally)
- use this endpoint to login the user
- use \*POST method.
- Select Body-->raw-->JSON
- In body give the body in format
- {
  "email":"your_email@gmail.com",
  "password":"Your Password"
  }
- Use this body format and send it.
- It will give you response with three things
- msg,token,userID in json format.
- now take the token and add it to the Headers make new key value pair, \*Authorization as key and token value as value.
- After this you will be authorized to the url endpoint to short url.

3. \*Register Endpoint

- https://url-shortener-app-653d.onrender.com/url (using deployed link)
- http://localhost:8080/url (using locally)
- use this endpoint to short the url
- use \*POST method.
- Select Body-->raw-->JSON
- In body give the body in format
- {
  "url":"your original url"
  }
- Use this body format and send it.
- This will give you response as two things originalUrl and shortUrl in json format
- {
  "originalUrl": "your original url",
  "Shorturl": "http://localhost:8080/url/shortenid"
  }
- Now access the short URL from this and it will redirect you to the original URL tab.

## Implemented

1. User Register
2. User Login
3. URL shorting
4. Short URL redirection to Original Url

## Please follow document to get good results.

# _Thank You_
