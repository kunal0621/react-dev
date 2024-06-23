import mongoose from "mongoose"

const uri = process.env.DB_URI

export const DBconection = () => {
    mongoose
        .connect(uri)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}
