Basic Crud application using MERN stack. 

#### Quick Setup

* Setup and run [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine. After installation create folder `C:\data\db` and `cd` to `C:\Program Files\MongoDB\Server\3.6\bin>` and enter command `mongod` (works for Windows). By default, `mongodb` server should start at port 27017

* `npm install -g nodemon` to automatically restart the server on changes

* `cd express-server` and `npm install` to setup dependencies and `npm start` to start back-end express server: `http://localhost:3001/api`

* `cd react-redux-client` and `npm install`to setup dependencies and `npm start` to start app: `http://localhost:3000`

#### Testing

For front-end:
* `cd react-redux-client` and `npm test` (basic coverage) 

For back-end:
* `cd express-server` and `npm test` (needs improvment) 
