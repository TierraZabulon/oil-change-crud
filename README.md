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

## Initial Setup
### Install dependencies and packages

- In terminal: `npm install` 

- Packages/Dependencies used: bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

### Connect to database
- Create `.env` file and include the following key value pairs:
```
PORT = 2121 (can be any port, like 3000) 
DB_STRING = mongodb+srv://... (your database URI connection string from MondoDB Atlas)
```
_[How to Get Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/)_
- ensure `.env` is within .gitignore to avoid sharing this private information

## Work on Issues
1. Check out the [Issues](https://github.com/TierraZabulon/oil-change-crud/issues) and assign yourself the one you will be working on (create one if it doesn't exist).
2. Make sure your fork is up to date before working on the issue by using a [reverse pull request](https://www.earthdatascience.org/courses/intro-to-earth-data-science/git-github/github-collaboration/update-github-repositories-with-changes-by-others/#:~:text=any%20given%20time.-,Sync%20Your%20Forked%20GitHub%20Repo%20Using%20A%20Reverse%20Pull%20Request,to%20update%20your%20local%20clone).
