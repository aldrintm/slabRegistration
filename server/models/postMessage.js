import mongoose from 'mongoose'

//create a mongoose schema
const postSchema = mongoose.Schema({
  brand: String,
  color: String,
  thickness: String,
  finish: String,
  length: Number,
  width: Number,
  quantity: Number,
  location: String,
  createdBy: String,
  tag: String,
  selectedFile: String,
  quantity: Number,
  textArea: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
