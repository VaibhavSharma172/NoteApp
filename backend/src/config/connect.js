import mongoose from 'mongoose'

const connection = async()=> {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${process.env.DB_NAME}`)
        console.log("connected successfully");
    } catch (error){
        console.log(error);
    }
}

export default connection;