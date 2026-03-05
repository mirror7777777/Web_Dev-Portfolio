import ClientModel from "../Model/clientmodel.js";
 const Register = async (req, res) => { // registration function 
    const { firstName,lastName, email, message} = req.body; // getting user details from the body
    if (!firstName || !email || !lastName || !message) { // an if statement to check if the user inputed all required details for registration
        console.log('Fill all the required details in') // sending error message if statement is true
    }

    try { // try catch block to handle storing user details procedure
        const Userexist = await ClientModel.findOne({ email }) // checking if user details already exist in the database
        if (Userexist) { // if statement is true, therefore user already exist
            console.log('User already exist') // sending error message stating user already exist
        }
        const userInfo = new ClientModel({
            firstName: firstName,
            lastName: lastName,
            email: email, 
            message: message
        });
        await userInfo.save()// saving userInfo to the database

        res.status(200).json({
            message: "User successfully registered", userInfo: {
                ...userInfo._doc
            }
        }
        )// sending success message to user accompaniend with user details after successful registration



    } catch (error) {
        console.log(error)
    } // catch block to handle errors

}
export default Register