// ./express-server/controllers/car.server.controller.js
import mongoose from 'mongoose';

//import models
import Car from '../models/car.server.model';

export const getCars = (req, res) => {
  Car.find().exec((err, cars) => {
    if (err) {
      return res.json({ 'message': 'Some Error' });
    }

    return res.json({ 'message': 'Cars fetched successfully', cars });
  });
}

export const addCar = (req, res) => {
  const newCar = new Car(req.body);
  newCar.save((err, car) => {
    if (err) {
      return res.json({ 'message': 'Car already exists' });
    }
    return res.json({ 'message': car.carNumber + ' added successfully', car });
  })
}

export const deleteCar = (req, res) => {
  Car.findByIdAndRemove(req.params.id, (err, car) => {
    if (err) {
      return res.json({ 'message': 'Some Error' });
    }

    return res.json({ 'message': car.carNumber + ' deleted successfully' });
  })
}
