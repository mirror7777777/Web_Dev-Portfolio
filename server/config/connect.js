import mongoose from "mongoose";
 const MongoDb = async () => {
    try {
     
        const connected = await mongoose.connect(process.env.MONGODB_URI)
        if (connected){
            console.log('Database connected')
        }
    } catch (error) {
        console.log('Database experiencing an error' + error.message)
    }
 
    
}
export default MongoDb;