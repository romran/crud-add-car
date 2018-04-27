import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  carNumber: String, 
  carOwner: String
});

export default mongoose.model('Car', Schema);
