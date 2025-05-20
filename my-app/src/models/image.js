import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);
