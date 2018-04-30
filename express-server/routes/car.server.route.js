// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as carController from '../controllers/car.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
      .get(carController.getCars)
      .post(carController.addCar);

router.route('/:id')
      .delete(carController.deleteCar);


export default router;
