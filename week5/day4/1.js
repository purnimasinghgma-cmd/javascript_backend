// step -1 import
const mongoose = require("mongoose");

// step -4 schema/blueprint/structure
const userSchema = new mongoose.Schema
(
    {
        name: String,
        email: String,
        age: Number,
        password: String
    },
{
versionKey: false,
}
);

const userModel = mongoose.model
("user", userSchema); 


const main = async () => {
    // step -2 build connection with mongoDB

    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/ekta");
    console.log("DB Connect");

    await userModel.insertOne({
        name: "niriksha",
        email: "riksha@gmail.com",
        age: 50,
        password: "xyz.com"
    });

    console.log("data added successfuly");
 
    // // step -3 disconnect
    // mongoose.disconnect();
    // console.log("DB Disconnect")

};
main();