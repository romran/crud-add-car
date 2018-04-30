import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  carNumber: {
    type: String, 
    required: true,
    index: {unique: true, dropDups: true},
    minlength: 6, maxlength: 6,
    validate: {
      validator: function(v) {
          var re = /(\w{3}).*?(\d{3})/;
          return (v == null || v.trim().length < 1) || re.test(v)
      },
      message: 'Format Error'
  }

  },
  carOwner: {
    type: String, 
    required: true, 
    minlength: 1, maxlength: 250
  }
});

export default mongoose.model('Car', Schema);
