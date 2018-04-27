// ./express-server/controllers/car.server.controller.js
import mongoose from 'mongoose';

//import models
import Car from '../models/car.server.model';

export const getCars = (req, res) => {
  Car.find().exec((err, cars) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }

    return res.json({ 'success': true, 'message': 'Cars fetched successfully', cars });
  });
}

export const addCar = (req, res) => {
  console.log(req.body);
  const newCar = new Car(req.body);
  newCar.save((err, car) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }
    console.log("super");
    return res.json({ 'success': true, 'message': 'Car added successfully', car });
    
  })
}

export const getCar = (req, res) => {
  Car.find({ _id: req.params.id }).exec((err, car) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }
    if (car.length) {
      return res.json({ 'success': true, 'message': 'Car fetched by id successfully', car });
    }
    else {
      return res.json({ 'success': false, 'message': 'Car with the given id not found' });
    }
  })
}

export const deleteCar = (req, res) => {
  Car.findByIdAndRemove(req.params.id, (err, car) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }

    return res.json({ 'success': true, 'message': car.carNumber + ' deleted successfully' });
  })
}
