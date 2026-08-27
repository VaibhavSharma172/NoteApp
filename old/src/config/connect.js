import mongoose from "mongoose";

const connection = async()=> {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${process.env.DB_NAME}`)
        console.log("server started")
    } catch(error) {
        console.log("error connecting")
    }
}

export default connection;