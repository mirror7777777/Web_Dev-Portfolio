import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type:String , required: true},
    lastName: {type:String , required: true},
    email: {type:String , required: true ,unique: true},
    message: {type: String , required: true ,unique: true}
} )

const ClientModel = mongoose.model('user', UserSchema)
export default ClientModel;