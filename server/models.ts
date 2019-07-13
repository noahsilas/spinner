import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  name: { type: String },
});

// eslint-disable-next-line import/prefer-default-export
export const Animal = mongoose.model('Animal', AnimalSchema);
