# Oil Change Scheduling App 
> Schedule an appointment with Al's Oil Change

MongoDB/Express/Node.JS web application using MVC Architecture and local authorization so users can sign up and schedule appointments.

---

# Contributing

1. Fork repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## Install dependencies and packages

- In terminal: `npm install` 

- Packages/Dependencies used: bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

## Connect to database
- Create `.env` file and add the following key value pairs
```
PORT = 2121 (can be any port, like 3000) 
DB_STRING = mongodb+srv://... (your-database-URI)
```
- add `.env` to .gitignore to avoid sharing this information
