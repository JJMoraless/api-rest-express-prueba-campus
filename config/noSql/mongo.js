import mongoose from "mongoose";

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("**** CONEXION EXITOSA 💘 ****");
      } else {
        console.log("**** CONEXION FALLIDA 🐌 ****");
      }
    }
  );
};

export default dbConnect;
