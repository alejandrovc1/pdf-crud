import mongoose from "mongoose";

const uri = 'mongodb+srv://alejandrovc:alejandrovc1@pdf-reader.wbjdftu.mongodb.net/test';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export default async function connectDB() {
  await mongoose.connect(uri, options).then(() => {
    console.log("Database is connected");
  });
}