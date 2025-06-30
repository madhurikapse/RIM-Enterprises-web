// models/Subscriber.js

import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // auto-convert to lowercase before saving
  },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;
